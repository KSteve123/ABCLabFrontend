import PatientNavBar from "../common/PatientNavBar";

export default function PatientMain(){
    
    
    let x = localStorage.getItem('ID')

    const MakeAppointment=(event1)=>{
        window.location.href = '/MakeAppointment'

    }
    const ViewAppointment=(event2)=>{
        window.location.href = '/PatientAppointments/'+x

    }
    const EditProfile=(event3)=>{
        window.location.href = '/EditProfile/'+x

    }

return(
<div>
<PatientNavBar/>
<div divclassName="col-sm-6 mb-4 offset-md-1">
    <h1>Welcome</h1><br></br>
<div className="col-sm-6 mb-4 offset-md-1">
<button type="button" class="btn btn-dark" onClick={MakeAppointment}>Make An Appointment</button>&emsp;&emsp;&emsp;&emsp;&emsp;
<button type="button" class="btn btn-light" onClick={ViewAppointment}>View Appiontments</button>&ensp;&ensp;&emsp;&emsp;&emsp;
<button type="button" class="btn btn-warning" onClick={EditProfile}>Edit Profile</button>
</div>
</div>
</div>
);

}