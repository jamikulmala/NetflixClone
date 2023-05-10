import { useLocation, useNavigate } from "react-router";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBack, PlayArrow } from "@mui/icons-material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useState } from "react";

export const TitlePage = (props) => {
    const state = useLocation();
    const item = state.state;
    let object = [];
    let title = "";
    const navigate = useNavigate();
    const [isFavorite, setFavorite] = useState(false);

    if(item.movie) {
      object = item.movie;
      title = object.title;
    } else {
      object = item.series;
      title = object.name;
    }
  
    useEffect(() => {
      props.updatePage("title");
      const fav = props.user.favorites.find((i) => i.id === object.id);
      if(fav !== undefined) {
        setFavorite(true);
      } else {

      }
    },[setFavorite, object.id, props]);
  
    const handleBackClick = () => {
      navigate(-1);
    };

    const handleFavClick = () => {
      if(isFavorite) {
        const newArr = props.user.favorites.filter((i) => i.id !== object.id)
        props.user.favorites = newArr;
      } else {
        props.user.favorites.push(object)
      }
      setFavorite(!isFavorite);
    }

    const FavoriteObject = () => {
      return (
        <div>
          {isFavorite ? <IconButton onClick={handleFavClick}>
                        <StarIcon sx={{ color: "white", fontSize: "32px" }} />
                      </IconButton> :
                      <IconButton onClick={handleFavClick}>
                        <StarBorderIcon sx={{ color: "white", fontSize: "32px" }} />
                      </IconButton>
                      }
        </div>
      );
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
            <Box>
              <IconButton>
               <PlayArrow sx={{ color: "white", fontSize: "32px" }} />
             </IconButton>
             <FavoriteObject />
            </Box>
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