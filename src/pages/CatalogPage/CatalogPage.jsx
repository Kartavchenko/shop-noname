import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToBasket } from "../../redux/userSlice";
import { getData } from "../../redux/authOperations";
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

  // const getData = () =>
  //   new Promise((resolve, reject) =>
  //     setTimeout(() => {
  //       resolve(arrayDb);
  //       // reject(new Error("some problems with load data"));
  //     }, 1000)
  //   );

  useEffect(() => {
    (async () => {
      try {
        const dataDB = await getData();
        console.log(dataDB);
        return setData(dataDB);
      } catch (error) {
        console.log(error);
      } finally {
      }
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

  const filteredList = data.sort(
    (a, b) =>
      (filterList === "height-price" && b.price - a.price) ||
      (filterList === "low-price" && a.price - b.price) ||
      (filterList === "last-popular" && a.popular - b.popular) ||
      (filterList === "first-popular" && b.popular - a.popular)
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
