import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const SearchBar = (props) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  props.updatePage("search");
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#141414', padding: '40px 0' }}>
      <TextField
        value={searchInput}
        sx={{ color: 'white', width: '70%', maxWidth: '800px' }}
        onChange={handleSearchInputChange}
        placeholder="Search for a title"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: 'white' }} />
            </InputAdornment>
          ),
        }}
      />
      <Box sx={{ marginLeft: '20px' }}>
        <IconButton sx={{ color: "white" }} size="large"><ArrowForwardIcon /></IconButton>
        <IconButton sx={{ color: "white" }} onClick={() => navigate("/home")} size="large"><CloseIcon /></IconButton>
      </Box>
    </Box>
  )
}