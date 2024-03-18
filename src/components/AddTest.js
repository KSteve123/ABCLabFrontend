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



export default function AddTest() {
  const[testName, setName] = React.useState('')
  const[testAmount, setAmount] = React.useState('')

  const Register=(e)=>{
    e.preventDefault()
    const Test={testName,testAmount}
    console.log(Test)
    fetch("http://localhost:8080/test/addTest",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(Test)
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
            Add Test
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="TestName"
                  required
                  fullWidth
                  id="testName"
                  label="Test Name"
                  autoFocus
                  value={testName}
                  onChange={(e)=>setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  autoComplete="off"
                  name="Amount"
                  required
                  fullWidth
                  label="Amount"
                  value={testAmount}
                  onChange={(e)=>setAmount(e.target.value)}
                
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