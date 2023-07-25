import { useState, useEffect } from "react";
import { getDataThunk } from "../../redux/dataOperations";
import { NavLink } from "react-router-dom";
import { SortBtn } from "./Category.styled";

function Category({ setFilterBtn }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { getAllProducts } = await getDataThunk();

        setCategoryList(getAllProducts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const filteredList = categoryList
    .map(({ category }) => category)
    .filter((item, index, array) => array.indexOf(item) === index);

  return (
    <>
      {filteredList.map((category) => (
        <NavLink key={category} to={category}>
          <SortBtn type="button" onClick={() => setFilterBtn(false)}>
            {category}
          </SortBtn>
        </NavLink>
      ))}
    </>
  );
}

export default Category;
