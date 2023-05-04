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
import { getDataThunk, getTotalPages } from "../../redux/dataOperations";
import {
  selectorIsLoggedInUser,
  selectorBasketItems,
} from "../../redux/selectors";
import Notiflix from "../../helpers/notifications";
import List from "../../components/List/List";

const CatalogPage = () => {
  const [page, setPage] = useState(0);
  const [getValueTotalPages, setValueGetTotalPages] = useState(0);
  const [items, setItems] = useState([]);
  const [emptyRespons, setEmptyRespons] = useState(false);

  const [querySearch] = useSearchParams();
  const queryValue = querySearch.get("title");

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectorIsLoggedInUser);
  const basketItems = useSelector(selectorBasketItems);

  const checkItemsInItems = basketItems.map((item) => item.id);

  useEffect(() => {
    (async () => {
      try {
        // Get data from server
        const data = await getDataThunk(page, queryValue);

        if (!data.length) {
          setEmptyRespons(true);
        } else {
          setEmptyRespons(false);
        }

        setItems(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page, queryValue]);

  useEffect(() => {
    (async () => {
      try {
        const totalPages = await getTotalPages();

        // Set total pages
        await setValueGetTotalPages(totalPages);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // Find item by id
  const findItemID = (array, id) => array.find((item) => item.id === id);

  const addToBasket = (id) => {
    if (isLoggedIn) {
      const itemID = findItemID(items, id);

      // Check if item is already in basket
      if (findItemID(basketItems, id)) {
        return Notiflix.Notify.info("Already added");
      }

      dispatch(addItemToBasket(itemID));

      Notiflix.Notify.success(`Added ${itemID.title}`);
    } else {
      // If user is not logged in
      Notiflix.Notify.failure("Please login in or register account");
    }
  };

  const paginationPages = (evt, page) => {
    const itemsPerPage = 20;
    const current = (page - 1) * itemsPerPage;
    setPage(current);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Main>
      {emptyRespons ? (
        <TextFail>Sorry, found nothing</TextFail>
      ) : (
        <BoxList component="ul">
          {items.map((elements) => (
            <List
              key={elements.id}
              elements={elements}
              findItemID={findItemID}
              items={items}
              checkItemsInItems={checkItemsInItems}
              addToBasket={addToBasket}
            />
          ))}
        </BoxList>
      )}
      {items.length ? (
        <BoxPagination>
          <PaginationStyled
            onChange={(evt, page) => paginationPages(evt, page)}
            count={getValueTotalPages}
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
