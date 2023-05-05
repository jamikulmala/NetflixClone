import { AppBar, Box, Button, Container, IconButton, SvgIcon, Toolbar, Typography } from "@mui/material"
import CastIcon from '@mui/icons-material/Cast';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from "react-router-dom";
import { ReactComponent as NetflixLogo } from '../tools/netflix_logo.svg';

export const NavigationBar = (props) => {

    const navigate = useNavigate();

    return(
        <AppBar position="fixed">
            <Container>
                <Toolbar>
                    <Box display="flex" flexGrow={1}>
                        <SvgIcon component={NetflixLogo} viewBox="0 0 500 135" style={{ width: '10%', height: '10%' }}
                                 onClick={() => navigate("/home")} sx={{ cursor: "pointer" }}/>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <IconButton size="large"><CastIcon /></IconButton>
                        <IconButton onClick={() => navigate("/search")} size="large"><SearchIcon /></IconButton>
                        <IconButton size="large"><AccountBoxIcon /></IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}