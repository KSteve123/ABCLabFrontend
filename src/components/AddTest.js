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



export default function AddTest() {
  const [test, setTests] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const[testName=null, setName] = React.useState('')
  const[testAmount=null, setAmount] = React.useState('')

  React.useEffect(() => {
		loadTests();
	}, []);

  const loadTests = async () => {
		const result = await axios.get(
			"http://localhost:8080/test/getAll",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		
			setTests(result.data);
           
		
	};

  const Register=(e)=>{
    e.preventDefault()
    const Test={testName,testAmount}
    console.log(Test)
    fetch("http://localhost:8080/test/addTest",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(Test)
}).then(response => {
  if (response.status === 200) {
    addNotification({
    title: 'Notification',
    message:"Test Added",
    native:true     
    })
    window.location.href = '/AddTest'
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
                  type="number"
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
              Create Test
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider><br></br>

    <table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
          <th> </th>
						<th>Test ID</th>
						<th>Test Name</th>
						<th>Amount</th>
            </tr>
				</thead>
        <tbody className="text-center">
					{test
						.filter((pt) =>
							pt.testName
								
								.includes(search)
						)
						.map((test, index) => (
							<tr key={test.id}>
								<th scope="row" key={index}>
									{index + 1}
								</th>
								<td>{test.id}</td>
								<td>{test.testName}</td>
								<td>{test.testAmount}</td>
							</tr>
						))}
				</tbody>
        </table>
    </div>
  );
}