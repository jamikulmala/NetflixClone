import { useLocation, useNavigate } from "react-router";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBack, PlayArrow } from "@mui/icons-material";

export const TitlePage = (props) => {
    const state = useLocation();
    const item = state.state;
    let object = [];
    let title = "";
    const navigate = useNavigate();
  
    props.updatePage("title");
  
    const handleBackClick = () => {
      navigate(-1);
    };

    if(item.movie) {
      object = item.movie;
      title = object.title;
    } else {
      object = item.series;
      title = object.name;
    }
  
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
        <img src={`https://image.tmdb.org/t/p/w500/${object.poster_path}`} alt={title} />
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
              {title}
            </Typography>
            <Typography variant="body1">{object.overview}</Typography>
          </Box>
        </Box>
      </Box>
    );
  };