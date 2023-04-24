import { AppBar, Box, Button, Container, Toolbar} from "@mui/material"
import { useNavigate } from "react-router"


export const FilterBar = () => {

    const navigate = useNavigate();

    return(
        <AppBar position="static">
            <Container>
                <Toolbar>
                        <Box >
                            <Button variant="contained" onClick={() => navigate("/movies")}>Movies</Button>
                            <Button variant="contained" onClick={() => navigate("/series")}>Series</Button>
                            <Button variant="contained" onClick={() => navigate("/categories")}>Categories</Button>
                        </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}