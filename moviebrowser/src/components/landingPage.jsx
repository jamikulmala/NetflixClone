import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Landing = (props) => {
    const [displayText, setDisplayText] = useState("");
    const [nextCharIndex, setNextCharIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const text = "MovieBrowser";
        const timerId = setInterval(() => {
          if (nextCharIndex < text.length) {
            const newText = text[nextCharIndex];
            setDisplayText(prevText => prevText + newText);
            setNextCharIndex(prevIndex => prevIndex + 1);
          } else {
            clearInterval(timerId);
            if (displayText === text) {
               navigate("/home")
            }
          }
        }, 100);
      
        return () => clearInterval(timerId);
      }, [nextCharIndex, displayText, navigate]);

      return (
        <Box 
            display="flex"
            justifyContent="center"
            alignItems="center">
            <Typography variant="h1">{displayText}</Typography>
        </Box>
      )

}