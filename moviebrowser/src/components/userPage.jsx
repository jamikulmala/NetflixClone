import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const UserPage = (props) => {

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    props.updatePage("profile");
  },[props])

  const viewItem = (movie) => {
    navigate(`/view/${movie}`, {state:{movie}})
  }

  return (
    <div>
    <div style={{ display: 'flex' }}>
    <Box
      sx={{
        width: '50%',
        height: '100vh',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        marginTop: '16px'
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '16px' }}>
        User Information
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '8px' }}>
        Email: {props.user.email}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '8px' }}>
        Phone Number: {props.user.phoneNumber}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '8px' }}>
        Password: {isPasswordVisible ? props.user.password : '********'}
      </Typography>
      <Button variant="contained" onClick={togglePasswordVisibility}>
        {isPasswordVisible ? 'Hide Password' : 'Show Password'}
      </Button>
    </Box>
    <Box
      sx={{
        width: '50%',
        height: '100%',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        marginTop: '16px',
        paddingRight: '32px'
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '16px' }}>
        Favorites
      </Typography>
      <Grid container spacing={2}>
        {props.user.favorites.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card onClick={() => viewItem(movie)}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
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
    </Box>
    </div>
      <IconButton onClick={handleBackClick} sx={{padding:'32px'}}>
        <ArrowBack sx={{ color: "white" }} />
      </IconButton>
    </div>
  );
}