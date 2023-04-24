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


const App = () => {

  const [isHomePage, setIsHomePage] = useState("");
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
    <Router>
      <div style={{paddingRight: '16px', paddingLeft: '16px'}}>
        <NavigationBar updatePage={updatePage}/>
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
        <Route exact path="/categories" element={<Categories updatePage={updatePage}/>}/>
        <Route exact path="/movies" element={<Movies updatePage={updatePage}/>}/>
        <Route exact path="/series" element={<Series updatePage={updatePage}/>}/>
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
