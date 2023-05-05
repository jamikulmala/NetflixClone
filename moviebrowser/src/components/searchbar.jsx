import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router";
import { useSpring, animated } from "react-spring";

export const SearchBar = (props) => {

  const navigate = useNavigate();

  useEffect(() => {
    props.updatePage("search")
  });

    const [searchInput, setSearchInput] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
      };

    const handleInputFocus = () => {
        setIsFocused(true);
      };
    
    const handleInputBlur = () => {
        setIsFocused(false);
      };
    
    const searchInputAnim = useSpring({
        width: isFocused ? "300px" : "200px",
      });

      return (
        <Box>
        <animated.div style={searchInputAnim}>
          <TextField
            value={searchInput}
            style={{ backgroundColor: 'black' }}
            onChange={handleSearchInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            placeholder="Search for title" 
            InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )}}/>
            <IconButton onClick={() => navigate("/home")} size="large"><CloseIcon /></IconButton>
          </animated.div>
          </Box>

      )
}