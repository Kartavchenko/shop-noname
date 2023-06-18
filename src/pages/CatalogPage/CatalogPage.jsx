import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToBasket } from "../../redux/userSlice";
import {
  Main,
  BoxList,
  BoxPagination,
  PaginationStyled,
  TextFail,
} from "./CatalogPage.styled";
import { getDataThunk } from "../../redux/dataOperations";
import {
  selectorIsLoggedInUser,
  selectorBasketItems,
} from "../../redux/selectors";
import Notiflix from "../../helpers/notifications";
import List from "../../components/List/List";

const CatalogPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageLimit] = useState(12);
  const [getTotalPages, setGetTotalPages] = useState();
  const [items, setItems] = useState([]);
  const [emptyRespons, setEmptyRespons] = useState(false);

  const [querySearch] = useSearchParams();
  const queryValue = querySearch.get("query") ?? "";

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectorIsLoggedInUser);
  const basketItems = useSelector(selectorBasketItems);

  const checkProductInItems = basketItems.map((item) => item._id);

  useEffect(() => {
    (async () => {
      try {
        // Get data from server

        if (queryValue) {
          setPageNumber(1);
        }

        const { getProducts, totalPages } = await getDataThunk(
          pageNumber,
          pageLimit,
          queryValue
        );

        if (!getProducts.length) {
          return setEmptyRespons(true);
        }

        setEmptyRespons(false);

        setGetTotalPages(totalPages);

        setItems(getProducts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [pageNumber, pageLimit, queryValue]);

  // Find item by id
  const findItemID = (array, id) => array.find((item) => item._id === id);

  const addToBasket = (id) => {
    if (isLoggedIn) {
      const itemID = findItemID(items, id);

      // Check if item is already in basket
      if (findItemID(basketItems, id)) {
        return Notiflix.Notify.info("Already added");
      }

      // Add item to basket
      dispatch(addItemToBasket(itemID));

      Notiflix.Notify.success(`Added ${itemID.name}`);
    } else {
      // If user is not logged in
      Notiflix.Notify.failure("Please login in or register account");
    }
  };

  const paginationPages = (page) => {
    setPageNumber(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Main>
      {emptyRespons ? (
        <TextFail>Sorry, nothing to find</TextFail>
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
};

export default CatalogPage;
