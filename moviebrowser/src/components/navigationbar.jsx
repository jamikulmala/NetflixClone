import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material"
import CastIcon from '@mui/icons-material/Cast';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useNavigate } from "react-router-dom";

export const NavigationBar = (props) => {

    const navigate = useNavigate();

    return(
        <AppBar position="fixed">
            <Container>
                <Toolbar>
                    <Typography>Hey!</Typography>
                        <Box>
                            <IconButton><CastIcon /></IconButton>
                            <IconButton onClick={() => navigate("/search")}><SearchIcon /></IconButton>
                            <IconButton><AccountBoxIcon /></IconButton>
                        </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}