import { useState } from "react";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Notiflix from "../../components/helpers/helpers";
import { SearchField, BtnSearch } from "./Search.styled";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useState("");

  const handleChange = (e) => {
    setSearchParams(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Notiflix.Notify.info(`you search ${searchParams}`);
    console.log("searchParams", searchParams);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchField
        size="small"
        placeholder="I'm Looking..."
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <BtnSearch type="submit" variant="string">
                Find
              </BtnSearch>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchBar;
