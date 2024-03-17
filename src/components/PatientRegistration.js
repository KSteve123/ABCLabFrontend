import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

export default function Patientregistration() {
    const[name, setName] = React.useState('')
    const[phone, setPhone] = React.useState('')
    const[email, setEmail] = React.useState('')
    const[address, setAddress] = React.useState('')
    const[password, setPassword] = React.useState('')

    const Register=(e)=>{

        e.preventDefault()
        const Patient={name,phone,email,address,password}
        console.log(Patient)
        fetch("http://localhost:8080/patient/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(Patient)
    }).then(()=>{
        console.log("Registration Complete")
    })
    }

    

  return (
    <Container
        
      component="form"
      
      noValidate
      autoComplete="off"
    >

      <TextField id="filled-basic" label="First Name" variant="filled" 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="filled-basic" label="Phone Number" variant="filled" fullWidth
      value={phone}
      onChange={(e)=>setPhone(e.target.value)}
      />
      <TextField id="filled-basic" label="Email" variant="filled" fullWidth
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <TextField id="filled-basic" label="Address" variant="filled" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <TextField id="filled-basic" label="Password" variant="filled" fullWidth
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
     <Button variant="contained" color="success" onClick={Register}>Success
     </Button>
    </Container>
    
  );

}