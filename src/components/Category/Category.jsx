import { useState, useEffect } from "react";
import { getAllCategories } from "../../redux/dataOperations";
import { NavLink } from "react-router-dom";
import { SortBtn } from "./Category.styled";

function Category({ setFilterBtn }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const categories = await getAllCategories();

        setCategoryList(categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {categoryList.map((category) => (
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
