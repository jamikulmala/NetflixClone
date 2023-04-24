import { Container } from "@mui/material";
import { useEffect } from "react";

export const Categories = (props) => {
 
  useEffect(() => {
    props.updatePage("category");
  });

    return (
      <Container></Container>  
    )
}