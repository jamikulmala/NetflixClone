import { Box, IconButton, InputAdornment, List, ListItem, ListItemText, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const SearchBar = (props) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    props.updatePage("search");
  },[props])
  
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredMovies = props.movies.filter((movie) =>
    movie.title.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  const handleClick = (movie) => {
    navigate(`/view/${movie}`, {state:{movie}})
  };

  return (
    <Box>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#141414', padding: '40px 0', height: '100vh' }}>
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
    {searchInput && (
      <List sx={{ width: '100%', color: 'white', marginTop: '20px' }}>
        {filteredMovies.map((movie) => (
          <ListItem key={movie.id} onClick={() => handleClick(movie)} sx={{'&:hover': { backgroundColor: '#222' }, cursor: 'pointer' }}>
            <ListItemText primary={movie.title} />
          </ListItem>
        ))}
      </List>
    )}
  </Box>
  )
}