

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
<button type="button" class="btn btn-dark" onClick={MakeAppointment}>Make An Appointment</button>
<button type="button" class="btn btn-light" onClick={ViewAppointment}>View Appiontments</button>
<button type="button" class="btn btn-warning" onClick={EditProfile}>Edit Profile</button>
</div>

);

}