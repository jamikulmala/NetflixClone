import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSpring, animated } from "react-spring";

export const Landing = () => {
  const [displayText, setDisplayText] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [go, setGo] = useState(false);
  const navigate = useNavigate();

  const text = "NETFLIX";

  const propsAnim = useSpring({
    from: { opacity: 0, transform: "scale(0)" },
    to: async (next) => {
      await next({ opacity: 1, transform: "scale(1)" });
      await next({ opacity: 0, transform: "scale(0.8)" });
      setDisplayText(text);
      await next({ opacity: 1, transform: "scale(1)" });
    },
    onRest: () => {
      document.addEventListener("click", handleClick, { once: true });
    },
  });

  const propsFont = useSpring({
    from: { fontSize: "4rem" },
    to: [
      { fontSize: "5rem" },
      { fontSize: "4rem" },
      { fontSize: "6rem" },
      { fontSize: "4rem" },
    ],
    config: { duration: 2000 },
  });

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setGo(true);
    }, 500);
  };

  if(go === true){
    navigate('/home');
    setGo(false);
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ cursor: "pointer" }}
    >
      <Box position="relative">
          <animated.div style={propsAnim}>
          <animated.div style={propsFont}>
            <Typography variant="h1" sx={{ color: "#e50914", fontFamily: "'Netflix Sans', sans-serif", transition: "opacity 0.5s",
              opacity: isClicked ? 0 : 1, }}>{displayText}</Typography>
          </animated.div>
          </animated.div>
      </Box>
    </Box>
  );
};



