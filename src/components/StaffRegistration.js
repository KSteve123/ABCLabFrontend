import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const defaultTheme = createTheme();



export default function StaffSignUp() {
  const[userName, setName] = React.useState('')
  const[password, setPassword] = React.useState('')

  const Register=(e)=>{
    e.preventDefault()
    const Staff={userName,password}
    console.log(Staff)
    fetch("http://localhost:8080/staff/add",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(Staff)
}).then(()=>{
    console.log("Registration Complete")
})
}

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Staff Login
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="UserName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={userName}
                  onChange={(e)=>setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  autoComplete="off"
                  name="Password"
                  required
                  fullWidth
                  id="Password"
                  label="Password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={Register}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}