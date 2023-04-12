import { useSearchParams } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchField } from "./Search.styled";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title") ?? "";

  const handleQuery = (e) => {
    const searchQuery = e.target.value;
    if (searchQuery === "") {
      return setSearchParams({});
    }
    setSearchParams({ title: searchQuery });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <form id="inputSearch" onSubmit={handleSubmit}>
      <SearchField
        size="small"
        placeholder="I'm Looking..."
        value={title}
        onChange={handleQuery}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default SearchBar;
