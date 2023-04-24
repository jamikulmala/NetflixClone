import { Container } from "@mui/material";
import { useEffect } from "react";

export const Movies = (props) => {

  useEffect(() => {
    props.updatePage("movies");
  });

    return (
      <Container></Container>  
    )
}