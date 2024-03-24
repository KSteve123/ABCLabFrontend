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
import axios from 'axios';
import Search from "../common/Search";
import addNotification from 'react-push-notification';
import StaffNavBar from "../common/StaffNavBar";


const defaultTheme = createTheme();



export default function AddDoctor() {
  const[name=null, setName] = React.useState('')
  const [doctor, setDoctors] = React.useState([]);
  const [search, setSearch] = React.useState("");
  
  React.useEffect(() => {
		loadDoctors();
	}, []);

  const loadDoctors = async () => {
		const result = await axios.get(
			"http://localhost:8080/doctor/getAll",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		
			setDoctors(result.data);
           
		
	};

  const Register=(e)=>{
    e.preventDefault()
    const Doctor={name}
    console.log(Doctor)
    fetch("http://localhost:8080/doctor/addDoctor",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(Doctor)
}).then(response => {
  if (response.status === 200) {
    addNotification({
    title: 'Notification',
    message:"Doctor Added",
    native:true     
    })
    window.location.href = '/AddDoctor'
  } else {
    addNotification({
    title: 'status',
    message:"Failed",
    native:true        
    })
  }
  });
}

  return (
    <div>
      <StaffNavBar/>
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
            Add Doctor
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="name"
                  required
                  fullWidth
                  id="DoctorName"
                  label="Doctor Name"
                  autoFocus
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
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
              Add Doctor
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider><br></br>
    <table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
          <th> </th>
					<th>Doctor ID</th>
					<th>Doctor Name</th>	
          </tr>
				</thead>
        <tbody className="text-center">
					{doctor
						.filter((pt) =>
							pt.name
								
								.includes(search)
						)
						.map((doctor, index) => (
							<tr key={doctor.id}>
								<th scope="row" key={index}>
									{index + 1}
								</th>
								<td>{doctor.id}</td>
								<td>{doctor.name}</td>
							</tr>
						))}
				</tbody>
        </table>
    </div>
  );
}