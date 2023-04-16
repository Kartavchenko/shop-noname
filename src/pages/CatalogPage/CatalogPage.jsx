import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@mui/material";
import { addItemToBasket } from "../../redux/userSlice";
import { BoxFilterBtns, BoxList, BoxPagination } from "./CatalogPage.styled";
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
  const [messageNoSearchResult, setMessageNoSearchResult] = useState("");

  const [querySearch] = useSearchParams();
  const queryValue = querySearch.get("title");

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectorIsLoggedInUser);
  const basketItems = useSelector(selectorBasketItems);

  useEffect(() => {
    (async () => {
      try {
        const totalPages = await getTotalPages();

        await setValueGetTotalPages(totalPages);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await getDataThunk(page, queryValue);

        if (data.length === 0) {
          setMessageNoSearchResult("Nothing found");
        }

        setItems(data);

        if (data.length > 0) {
          setMessageNoSearchResult("");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page, queryValue]);

  const checkIdItemInBasket = (id) =>
    basketItems.find((item) => item.id === id);

  const findItemId = (id) => items.find((item) => item.id === id);

  const addToBasket = (id) => {
    if (isLoggedIn) {
      const itemID = findItemId(id);

      if (checkIdItemInBasket(id)) {
        return Notiflix.Notify.info("Already added");
      }

      dispatch(addItemToBasket(itemID));

      Notiflix.Notify.success(`added ${itemID.title}`);
    } else {
      Notiflix.Notify.failure("please login in or register account");
    }
  };

  const paginationPages = (evt, page) => {
    const itemsPerPage = 20;
    const start = (page - 1) * itemsPerPage;
    setPage(start);
  };

  return (
    <main>
      <BoxFilterBtns></BoxFilterBtns>
      <BoxList component="ul">
        {messageNoSearchResult ? (
          <h2>{messageNoSearchResult}</h2>
        ) : (
          <List items={items} addToBasket={addToBasket} />
        )}
      </BoxList>
      {items.length ? (
        <BoxPagination>
          <Pagination
            onChange={(evt, page) => paginationPages(evt, page)}
            count={getValueTotalPages}
            variant="outlined"
            shape="rounded"
          />
        </BoxPagination>
      ) : null}
    </main>
  );
};

export default CatalogPage;
