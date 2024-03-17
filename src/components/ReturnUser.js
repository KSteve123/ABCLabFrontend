import addNotification from 'react-push-notification';

export default function UserCheck(){

let ID="Incorrect Credential";
localStorage.setItem('ID',null);

fetch("http://localhost:8080/loginuser/Authenticaton")
        .then(Response => Response.text())
        .then(data => {
          // Assign the response data to the variable
          ID= data;
          if (ID!=="Incorrect Credential") {
            const id = ID;
            localStorage.setItem('ID', id);
            window.location.href = '/PatientMain'
          } else {
            addNotification({
              title: 'Warning',
              message:"Incorrect Credentials",
              native:true        
            })
            window.location.href = '/'
          }
      
          // Handle the text data if needed
          
        })
        .catch(error => console.log(error))
        
    }