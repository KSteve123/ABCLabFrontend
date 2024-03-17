import ViewAppointments from "./PatientAppointments"



export default function StaffMain(){
    let x = localStorage.getItem('ID')

    const AddTest=(event1)=>{
        window.location.href = '/AddTest'

    }
    const ViewPatients=(event2)=>{
        window.location.href = '/ViewPatient'

    }
    const AddTechnicians=(event3)=>{
        window.location.href = '/AddTechnicians'

    }

    const ViewAppointments=(event4)=>{
        window.location.href = '/ViewAppointment'

    }

return(
<div>
<button type="button" class="btn btn-dark" onClick={AddTest}>Add Test</button><br></br>
<button type="button" class="btn btn-light" onClick={ViewPatients}>View Patients</button><br></br>
<button type="button" class="btn btn-warning" onClick={AddTechnicians}>Add Technicians</button><br></br>
<button type="button" class="btn btn-secondary" onClick={ViewAppointments}>View Appointment</button><br></br>
</div>

);

}