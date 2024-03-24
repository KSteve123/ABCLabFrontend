import ViewAppointments from "./PatientAppointments"
import StaffNavBar from "../common/StaffNavBar";


export default function StaffMain(){
    let x = localStorage.getItem('ID')

    const AddTest=(event1)=>{
        window.location.href = '/AddTest'

    }
    const ViewPatients=(event2)=>{
        window.location.href = '/ViewPatient'

    }
    const AddTechnicians=(event3)=>{
        window.location.href = '/AddTechnician'

    }

    const ViewAppointments=(event4)=>{
        window.location.href = '/ViewAppointment'

    }

    const AddDoctors=(event5)=>{
        window.location.href = '/AddDoctor'

    }


return(
<div>
    <StaffNavBar/><br></br>
    <h1>Welcome</h1><br></br>
    <div class="offset-md-2">
<div>
<button type="button" class="btn btn-dark" onClick={AddTest}>Add Test</button>
</div><br></br>
<div>
<button type="button" class="btn btn-light" onClick={ViewPatients}>View Patients</button>
</div><br></br>
<div>
<button type="button" class="btn btn-warning" onClick={AddTechnicians}>Add Technicians</button>
</div><br></br>
<div>
<button type="button" class="btn btn-secondary" onClick={ViewAppointments}>View Appointment</button>
</div><br></br>
<div>
<button type="button" class="btn btn-secondary" onClick={AddDoctors}>Add Doctor</button>
</div><br></br>
</div>
</div>

);

}