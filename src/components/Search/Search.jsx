import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchField } from "./Search.styled";

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams({});

  const queryValue = searchParams.get("query") ?? "";

  const [searchValue, setSearchValue] = useState(queryValue);

  const handleQuery = (e) => {
    setSearchValue(e.target.value);

    if (e.target.value === "") {
      return setSearchParams({});
    }
  };

  const handleSubmitQuery = (e) => {
    e.preventDefault();

    if (searchValue === "") {
      return setSearchParams({});
    }

    setSearchParams({ query: searchValue });
  };

  return (
    <form action="">
      <SearchField
        size="small"
        placeholder="I'm Looking..."
        value={searchValue}
        onChange={handleQuery}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                type="submit"
                size="small"
                variant="subtitle"
                onClick={handleSubmitQuery}
              >
                <SearchIcon />
                Serach
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}

export default SearchBar;
