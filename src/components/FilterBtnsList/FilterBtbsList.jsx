import { BtnSort } from "./FilterBtbsList.styled";

const FilterBtnsList = ({ setFilterList, filterPrise }) => {
  const buttonFilterPrice = [
    { name: "first Popular", filter: "first-popular" },
    { name: "last Popular", filter: "last-popular" },
    { name: "low price", filter: "low-price" },
    { name: "height price", filter: "height-price" },
  ];

  return (
    <div>
      {buttonFilterPrice.map(({ name, filter }) => (
        <BtnSort
          size="small"
          key={name}
          variant={filterPrise === filter ? "contained" : "outlined"}
          onClick={() => {
            setFilterList(filter);
          }}
        >
          {name}
        </BtnSort>
      ))}
    </div>
  );
};

export default FilterBtnsList;
