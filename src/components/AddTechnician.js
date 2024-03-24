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
import StaffNavBar from "../common/StaffNavBar";
import axios from 'axios';
import Search from "../common/Search";
import addNotification from 'react-push-notification';

const defaultTheme = createTheme();



export default function AddTechnician() {
  const[name=null, setName] = React.useState('')
  const [technician, setTechnicians] = React.useState([]);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
		loadTechnicians();
	}, []);

  const loadTechnicians = async () => {
		const result = await axios.get(
			"http://localhost:8080/technician/getAll",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		
			setTechnicians(result.data);
           
		
	};

  const Register=(e)=>{
    e.preventDefault()
    const Technician={name}
    console.log(Technician)
    fetch("http://localhost:8080/technician/addTechnician",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(Technician)
}).then(response => {
  if (response.status === 200) {
    addNotification({
    title: 'Notification',
    message:"Technician Added",
    native:true     
    })
    window.location.href = '/AddTechnician'
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
            Add Technician
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="name"
                  required
                  fullWidth
                  id="TechnicianName"
                  label="Technician Name"
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
              Add Technician
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider><br></br>
    <table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
          <th> </th>
					<th>Technician ID</th>
					<th>Technician Name</th>	
          </tr>
				</thead>
        <tbody className="text-center">
					{technician
						.filter((pt) =>
							pt.name
								
								.includes(search)
						)
						.map((technician, index) => (
							<tr key={technician.id}>
								<th scope="row" key={index}>
									{index + 1}
								</th>
								<td>{technician.id}</td>
								<td>{technician.name}</td>
							</tr>
						))}
				</tbody>
        </table>
    </div>
  );
}