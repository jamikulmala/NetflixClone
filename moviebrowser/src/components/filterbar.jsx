import { AppBar, Box, Button, Container, Toolbar} from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router"
import { useSpring, animated } from "react-spring";


export const FilterBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    const springProps = useSpring({
        opacity: isScrolled ? 0.6 : 1,
      });

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <animated.div style={springProps}>
        <AppBar position="static">
            <Container>
                <Toolbar>
                        <Box display="flex" justifyContent="center" width="100%">
                            <Button variant="contained" onClick={() => navigate("/movies")} style={{ margin: '0 20px' }}>Movies</Button>
                            <Button variant="contained" onClick={() => navigate("/series")} style={{ margin: '0 20px' }}>Series</Button>
                            <Button variant="contained" onClick={() => navigate("/categories")} style={{ margin: '0 20px' }}>Categories</Button>
                        </Box>
                </Toolbar>
            </Container>
        </AppBar>
        </animated.div>
    )
}