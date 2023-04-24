import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = (props) => {

  useEffect(() => {
    props.updatePage("search")
  });

    const [searchInput, setSearchInput] = useState('');

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
      };

      return (
        <TextField
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Search for title" 
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )}}/>
      )
}