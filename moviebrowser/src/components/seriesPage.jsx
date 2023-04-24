import { Container } from "@mui/material";
import { useEffect } from "react";

export const Series = (props) => {

  useEffect(() => {
    props.updatePage("series");
  });

    return (
      <Container></Container>  
    )
}