import { useState } from 'react';
import { Alert, Box, Button, SvgIcon, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { ReactComponent as NetflixLogo } from '../tools/netflix_logo.svg';
import users from '../tools/users.json';

// Any kind of backend operations were not required so I cannot write to json so please use the credits on users.json to login
// or register with new credentials. The credentials will not thus be saved when you close the application so they are one use only.

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const user = users.find(
      (user) =>
        (user.email === email || user.phoneNumber === email) &&
        user.password === password
    );
  
    if (user) {
      navigate('/home');
      props.setUser(users[0]);
    } else {
      setError(true);
    }
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
            '&:hover': { backgroundColor: '#f40612' } }}>Sign In</Button>
        <Typography variant="body1" sx={{marginTop: '5px'}}>
           New User?
          <Button onClick={() => navigate('/register')} sx={{ color: '#b3b3b3', '&:hover': {color: 'white',} }}>Sign Up Now</Button>
        </Typography>
      </form>
      {error && (
        <Alert severity="error" onClose={() => setError(false)}>
          Invalid email, phone number, or password.
        </Alert>
      )}
    </Box>
  );
};