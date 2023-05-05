import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { HomePage } from './components/homepage';
import { NavigationBar } from './components/navigationbar';
import { FilterBar } from './components/filterbar';
import { SearchBar } from './components/searchbar';
import { Landing } from './components/landingPage';
import { Categories } from './components/categoryPage';
import { Movies } from './components/moviePage';
import { Series } from './components/seriesPage';
import { Footer } from './components/footer';
import { FetchRandom } from './tools/fetchdata';
import { Box, ThemeProvider } from "@mui/material";
import { themeOptions } from './tools/theme';
import { TitlePage } from './components/titlepage';


const App = () => {

  const [isHomePage, setIsHomePage] = useState("landing");
  const [popular, setPopular] = useState([]);

  const updatePage = (newState) => {
    setIsHomePage(newState);
  }

  const updatePopular = (newMovies) => {
    setPopular(newMovies);
  };

  useEffect(() => {
    const fetchPopular = async () => {
      FetchRandom(updatePopular);
    };
    fetchPopular();
  }, []);

  return(
    <ThemeProvider theme={themeOptions}>
    <Box bgcolor="#141414">
    <Router>
      <div style={{paddingRight: '16px', paddingLeft: '16px'}}>
      {isHomePage !== "landing" && (
        <NavigationBar updatePage={updatePage} />
      )}
        <div style={{ paddingTop: '64px' }}>
          {isHomePage === "home" && (
            <FilterBar />
          )}
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Landing updatePage={updatePage}/>}/>
        <Route exact path="/home" element={<HomePage updatePage={updatePage} movies={popular} />}/>
        <Route exact path="/search" element={<SearchBar updatePage={updatePage}/>}/>
        <Route exact path="/categories" element={<Categories updatePage={updatePage} />}/>
        <Route exact path="/movies" element={<Movies updatePage={updatePage}/>}/>
        <Route exact path="/series" element={<Series updatePage={updatePage}/>}/>
        <Route exact path="/view/:id" element={<TitlePage updatePage={updatePage}/>}/>
      </Routes>
      <div>
      {isHomePage !== "landing" && (
        <Footer />
      )}
      </div>
    </Router>
    </Box>
    </ThemeProvider>
  )
}

export default App;
