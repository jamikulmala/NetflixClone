import { useLocation, useNavigate } from "react-router";
import { Box, IconButton, Typography, useThemeProps } from "@mui/material";
import { ArrowBack, PlayArrow } from "@mui/icons-material";

export const TitlePage = (props) => {
    const state = useLocation();
    const movie = state.state.movie;
    const navigate = useNavigate();
  
    props.updatePage("title");
  
    const handleBackClick = () => {
      navigate(-1);
    };
  
    return (
      <Box>
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: "800px",
            margin: "0 auto",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white"
          }}
        >
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "32px",
            }}
          >
            <IconButton onClick={handleBackClick}>
              <ArrowBack sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <PlayArrow sx={{ color: "white", fontSize: "64px" }} />
            </IconButton>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ marginBottom: "16px" }}>
              {movie.title}
            </Typography>
            <Typography variant="body1">{movie.overview}</Typography>
          </Box>
        </Box>
      </Box>
    );
  };