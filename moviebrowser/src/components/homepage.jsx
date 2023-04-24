import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import { FilterBar } from "./filterbar";
import { useEffect } from "react";

export const HomePage = (props) => {
  
    useEffect(() => {
      props.updatePage("home");
    });

    console.log(props.movies);

    return (
      <div style={{ paddingTop: '64px'}}>
      <Grid container spacing={2}>
        {props.movies.map(movie => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <Card>
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
                  <Typography variant="body2" color="textSecondary" component="p">
                    {movie.overview}
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