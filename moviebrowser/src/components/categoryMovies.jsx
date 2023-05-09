import { ArrowBack } from "@mui/icons-material";
import { Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { fetchContent } from "../tools/fetchdata";

export const CategoryMovies = (props) => {

    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const state = useLocation();
    const id = state.state.genre.id;

    useEffect(() => {
      props.updatePage("category");
      const fetchData = async () => {
        const popularData = await fetchContent(id);
        setMovies(popularData);
      }
      fetchData();
    },[props,id]);

    const viewItem = (movie) => {
      navigate(`/view/${movie}`, {state:{movie}})
    }

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
      <div style={{ paddingTop: '12px'}}>
      <Grid container spacing={2}>
        {movies && movies.map(movie => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <Card onClick={() => viewItem(movie)}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {movie.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <IconButton onClick={handleBackClick} sx={{paddingTop:'32px'}}>
        <ArrowBack sx={{ color: "white" }} />
      </IconButton>
      </div>
      
    );
}