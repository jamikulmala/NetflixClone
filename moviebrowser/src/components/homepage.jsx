import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import { FilterBar } from "./filterbar";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const HomePage = (props) => {

    const navigate = useNavigate();

    useEffect(() => {
      props.updatePage("home");
    });

    const viewItem = (movie) => {
      navigate(`/view/${movie}`, {state:{movie}})
    }

    return (
      <div style={{ paddingTop: '12px'}}>
      <Grid container spacing={2}>
        {props.movies.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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
      </div>
    );
}