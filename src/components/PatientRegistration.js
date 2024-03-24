import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import addNotification from 'react-push-notification';

export default function Patientregistration() {
    const[name=null, setName] = React.useState('')
    const[phone=null, setPhone] = React.useState('')
    const[email=null, setEmail] = React.useState('')
    const[address=null, setAddress] = React.useState('')
    const[password=null, setPassword] = React.useState('')

    const Register=(e)=>{

        e.preventDefault()
        const Patient={name,phone,email,address,password}
        console.log(Patient)
        fetch("http://localhost:8080/patient/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(Patient)
    }).then(response => {
      if (response.status === 200) {
        addNotification({
          title: 'Notification',
          message:"Registration Complete",
          native:true        
        })
        window.location.href = '/'
      } else {
        addNotification({
          title: 'status',
          message:"Registration failed. PLease check the Details you filled",
          native:true        
        })
      }
    }
    )
    }

    

  return (
    <div class="offset-md-1">
      <h1 align="center">Patient Registration</h1><br></br>
    <Container 
        
      component="form"
      
      noValidate
      autoComplete="off"
    >
      <div className="input-group mb-5">
      <TextField id="filled-basic" label="First Name" variant="filled" 
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      </div>
      <div className="input-group mb-5">
      <TextField id="filled-basic" label="Phone Number" variant="filled" fullWidth
      value={phone}
      onChange={(e)=>setPhone(e.target.value)}
      />
      </div>
      <div className="input-group mb-5">
      <TextField id="filled-basic" label="Email" variant="filled" fullWidth
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      </div>
      <div className="input-group mb-5">
      <TextField id="filled-basic" label="Address" variant="filled" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      </div>
      <div className="input-group mb-5">
      <TextField id="filled-basic" label="Password" variant="filled" fullWidth
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      </div>
      <div className="input-group mb-5">
     <Button variant="contained" color="success" onClick={Register}>Success
     </Button>
     </div>
    </Container>
    </div>
    
  );

}