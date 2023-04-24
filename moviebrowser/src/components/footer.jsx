import { Box, SvgIcon } from "@mui/material";
import { ReactComponent as FooterImage } from '../tools/tmdb_logo.svg';

export const Footer = () => {
    return (
        <div style={{ paddingTop: '64px' }}>
            <Box textAlign="center">
                <SvgIcon component={FooterImage} viewBox="0 0 273.42 35.52" style={{ width: '20%', height: '20%' }}/>
            </Box>
        </div>
      );
}