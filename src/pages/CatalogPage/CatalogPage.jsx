import { arrayDb } from "../../arrayDb";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToBasket } from "../../redux/userSlice";
import { BoxFilterBtns, BoxList } from "./CatalogPage.styled";
import {
  selectorIsLoggedInUser,
  selectorBasketItems,
} from "../../redux/selectors";
import Notiflix from "../../components/helpers/helpers";
import FilterBtnsList from "../../components/FilterBtnsList/FilterBtbsList";
import List from "../../components/List/List";

const CatalogPage = () => {
  const [data, setData] = useState([]);
  const [filterList, setFilterList] = useState("first-popular");

  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectorIsLoggedInUser);
  const basketItems = useSelector(selectorBasketItems);

  useEffect(() => {
    (async () => {
      await setData(arrayDb);
    })();
  }, []);

  const addToBasket = (id) => {
    if (isLoggedIn) {
      const itemID = data.find((item) => item.id === id);
      const checkItemBasket = basketItems.find((item) => item.id === id);
      if (checkItemBasket) {
        return Notiflix.Notify.info("Already added");
      }
      dispatch(addItemToBasket(itemID));
      Notiflix.Notify.success(`added ${itemID.name}`);
    } else {
      Notiflix.Notify.failure("please login in or register account");
    }
  };

  const filteredList = [...data].sort((a, b) =>
    filterList === "low-price"
      ? a.price - b.price
      : b.price - a.price && filterList === "last-popular"
      ? a.popular - b.popular
      : b.popular - a.popular
  );

  return (
    <main>
      <BoxFilterBtns>
        <FilterBtnsList
          data={data}
          filterPrise={filterList}
          setFilterList={setFilterList}
        />
      </BoxFilterBtns>
      <BoxList component="ul">
        <List filteredList={filteredList} addToBasket={addToBasket} />
      </BoxList>
    </main>
  );
};

export default CatalogPage;
