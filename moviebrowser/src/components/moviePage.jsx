import { Box, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchPopularMovies, fetchTopRatedMovies } from "../tools/fetchdata";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from "react-router";
import { ArrowBack } from "@mui/icons-material";

export const Movies = (props) => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popularIndex, setPopularIndex] = useState(0);
  const [topRatedIndex, setTopRatedIndex] = useState(0);

  useEffect(() => {
    props.updatePage('movies');
    const fetchData = async () => {
      const popularData = await fetchPopularMovies();
      setPopular(popularData);
      const topRatedData = await fetchTopRatedMovies();
      setTopRated(topRatedData);
    }
    fetchData();
  }, [props]);

  const handlePopularPrev = () => {
    if (popularIndex > 0) {
      setPopularIndex(popularIndex - 1);
    }
  }

  const handlePopularNext = () => {
    if (popularIndex < popular.length - 1) {
      setPopularIndex(popularIndex + 1);
    }
  }

  const handleTopRatedPrev = () => {
    if (topRatedIndex > 0) {
      setTopRatedIndex(topRatedIndex - 1);
    }
  }

  const handleTopRatedNext = () => {
    if (topRatedIndex < topRated.length - 1) {
      setTopRatedIndex(topRatedIndex + 1);
    }
  }

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const viewItem = (movie) => {
    navigate(`/view/${movie}`, {state:{movie}})
  }

  return (
    <div style={{ paddingTop: '32px' }}>
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%"}}>
        <IconButton onClick={handlePopularPrev}>
          <ArrowBackIosIcon sx={{color:'white'}}/>
        </IconButton>
        <Typography variant="h4" sx={{color:'white'}}>Popular Movies</Typography>
        <IconButton onClick={handlePopularNext}>
          <ArrowForwardIosIcon sx={{color:'white'}}/>
        </IconButton>
      </Box>
      <Grid container spacing={2}>
        {popular.slice(popularIndex, popularIndex + 3).map((title) => (
          <Grid item xs={12} sm={6} md={4} key={title.id}>
            <Card onClick={() => viewItem(title)}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={`https://image.tmdb.org/t/p/w500${title.poster_path}`}
                  alt={title.title}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {title.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", paddingTop: '32px'}}>
        <IconButton onClick={handleTopRatedPrev}>
          <ArrowBackIosIcon sx={{color:'white'}}/>
        </IconButton>
        <Typography variant="h4" sx={{color:'white'}}>Top rated Movies</Typography>
        <IconButton onClick={handleTopRatedNext}>
          <ArrowForwardIosIcon sx={{color:'white'}}/>
        </IconButton>
      </Box>
      <Grid container spacing={2}>
        {topRated.slice(topRatedIndex, topRatedIndex + 3).map((title) => (
          <Grid item xs={12} sm={6} md={4} key={title.id}>
            <Card onClick={() => viewItem(title)}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={`https://image.tmdb.org/t/p/w500${title.poster_path}`}
                  alt={title.title}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {title.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <IconButton onClick={handleBackClick} sx={{padding:'32px'}}>
        <ArrowBack sx={{ color: "white" }} />
      </IconButton>
    </div>
  )
}