import { useState } from 'react';
import { Box, Button, SvgIcon, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { ReactComponent as NetflixLogo } from '../tools/netflix_logo.svg';

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: 'white',
      }}>
      <SvgIcon component={NetflixLogo} viewBox="0 0 500 135" style={{ width: '30%', height: '30%' }} />
      <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'}}>
        <TextField
          label="Email or phone number"
          value={email}
          onChange={handleEmailChange}
          sx={{
            backgroundColor: 'black',
            borderRadius: '4px',
            marginBottom: '20px',
            }}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          sx={{
            borderRadius: '4px',
            marginBottom: '20px',
            backgroundColor: 'black'
            }}
        />
        <Button variant="contained" type="submit" sx={{
            marginTop: '10px',
            backgroundColor: '#e50914',
            color: 'white',
            '&:hover': { backgroundColor: '#f40612' } }}>Sign Up</Button>
        <Typography variant="body1" sx={{marginTop: '5px'}}>
           Returning User?
          <Button onClick={() => navigate('/login')} sx={{ color: '#b3b3b3', '&:hover': {color: 'white',} }}>Sign In Now</Button>
        </Typography>
      </form>
    </Box>
  );
};