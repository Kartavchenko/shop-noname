import { useState, useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToBasket } from "../../redux/userSlice";
import {
  Main,
  BoxList,
  BoxPagination,
  PaginationStyled,
  TextFail,
  BoxLoading,
} from "./CatalogPage.styled";
import BarsLoader from "../../components/loaders/LoaderBars";
import { getDataThunk } from "../../redux/dataOperations";
import { selectorBasketItems } from "../../redux/selectors";
import Notiflix from "../../helpers/notifications";
import List from "../../components/List/List";

function CatalogPage() {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit] = useState(12);
  const [getTotalPages, setGetTotalPages] = useState(1);
  const [items, setItems] = useState([]);
  const [emptyRespons, setEmptyRespons] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const basketItems = useSelector(selectorBasketItems);

  const { category } = useParams();

  const [querySearch] = useSearchParams();

  const queryValue = querySearch.get("query") ?? "";

  const navigate = useNavigate();

  const checkProductInItems = basketItems.map((item) => item._id);

  // Find item by id
  const findItemID = (array, id) => array.find((item) => item._id === id);

  useEffect(() => {
    if (queryValue) {
      return navigate(`/?query=${queryValue}`);
    }
  }, [navigate, queryValue]);

  useEffect(() => {
    (async () => {
      try {
        if (queryValue) {
          setPageNumber(1);
        }

        setLoading(true);

        const { getProducts, totalPages, getByCategory } = await getDataThunk(
          pageNumber,
          pageLimit,
          queryValue,
          category
        );

        setLoading(false);

        if (!getProducts.length) {
          return setEmptyRespons(true);
        }

        setEmptyRespons(false);

        if (getByCategory.length) {
          setGetTotalPages(Math.floor(getByCategory.length / pageLimit) || 1);
        } else {
          setGetTotalPages(totalPages);
        }

        if (getByCategory.length) {
          return setItems(getByCategory);
        }

        setItems(getProducts);
      } catch (error) {
        setLoading(false);

        console.log(error);
      }
    })();
  }, [pageNumber, pageLimit, queryValue, category, navigate]);

  const addToBasket = (id, quantity = 1) => {
    const itemID = findItemID(items, id);

    if (findItemID(basketItems, id)) {
      return Notiflix.Notify.failure(`${itemID.name} exist in cart`);
    }

    Notiflix.Notify.success(`Added ${itemID.name}`);

    return dispatch(addItemToBasket({ ...itemID, quantity: quantity }));
  };

  const paginationPages = (page) => {
    setPageNumber(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Main>
      {loading && (
        <BoxLoading>
          <BarsLoader />
        </BoxLoading>
      )}
      {emptyRespons ? (
        <TextFail>Sorry, found nothing</TextFail>
      ) : (
        <BoxList component="ul">
          {items.map((items) => (
            <List
              key={items._id}
              items={items}
              findItemID={findItemID}
              checkProductInItems={checkProductInItems}
              addToBasket={addToBasket}
            />
          ))}
        </BoxList>
      )}
      {items.length && !emptyRespons ? (
        <BoxPagination>
          <PaginationStyled
            onChange={(evt, page) => paginationPages(page)}
            count={getTotalPages}
            variant="outlined"
            color="primary"
            shape="rounded"
          />
        </BoxPagination>
      ) : null}
    </Main>
  );
}

export default CatalogPage;
