import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@mui/material";
import { addItemToBasket } from "../../redux/userSlice";
import { BoxFilterBtns, BoxList, BoxPagination } from "./CatalogPage.styled";
import { getDataThunk } from "../../redux/dataOperations";
import {
  selectorIsLoggedInUser,
  selectorBasketItems,
} from "../../redux/selectors";
import Notiflix from "../../helpers/notifications";
// import FilterBtnsList from "../../components/FilterBtnsList/FilterBtnsList";
import List from "../../components/List/List";

const CatalogPage = () => {
  // const [filterList, setFilterList] = useState("first-popular");
  const [page, setPage] = useState(0);
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

  const checkItemBasket = (id) => basketItems.find((item) => item.id === id);

  const findItemId = (id) => items.find((item) => item.id === id);

  const addToBasket = (id) => {
    if (isLoggedIn) {
      const itemID = findItemId(id);

      if (checkItemBasket(id)) {
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

  // const filteredList = [...items].sort(
  //   (a, b) =>
  //     (filterList === "height-price" && b.price - a.price) ||
  //     (filterList === "low-price" && a.price - b.price) ||
  //     (filterList === "last-popular" && a.popular - b.popular) ||
  //     (filterList === "first-popular" && b.popular - a.popular)
  // );

  return (
    <main>
      <BoxFilterBtns>
        {/* <FilterBtnsList
          filterPrise={filterList}
          setFilterList={setFilterList}
        /> */}
      </BoxFilterBtns>
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
            disabled={items.length < 20}
            onChange={(evt, page) => paginationPages(evt, page)}
            count={14}
            variant="outlined"
            shape="rounded"
          />
        </BoxPagination>
      ) : null}
    </main>
  );
};

export default CatalogPage;
