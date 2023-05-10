import { ArrowBack } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const UserPage = (props) => {

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    props.updatePage("profile");
  },[props])

  return (
    <div>
    <div style={{ display: 'flex' }}>
    <Box
      sx={{
        width: '50%',
        height: '100vh',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        marginTop: '16px'
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '16px' }}>
        User Information
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '8px' }}>
        Email: {props.user.email}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '8px' }}>
        Phone Number: {props.user.phoneNumber}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '8px' }}>
        Password: {isPasswordVisible ? props.user.password : '********'}
      </Typography>
      <Button variant="contained" onClick={togglePasswordVisibility}>
        {isPasswordVisible ? 'Hide Password' : 'Show Password'}
      </Button>
    </Box>
    <Box
      sx={{
        width: '50%',
        height: '100vh',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        marginTop: '16px'
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '16px' }}>
        Favorites
      </Typography>
    </Box>
    </div>
    <IconButton onClick={handleBackClick} sx={{padding:'32px'}}>
        <ArrowBack sx={{ color: "white" }} />
      </IconButton>
    </div>
  );
}