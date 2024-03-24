import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import addNotification from 'react-push-notification';
import PatientNavBar from "../common/PatientNavBar";

export default function AddAppointment() {

    const [doctors, setDoctors] = useState([]);
    const [doctorName, setSelectedDoctor] = useState('');
    const [tests, setTests] = useState([]);
    const [testName, setSelectedTest] = useState('');
    const [date, setDate] = useState('');
    let patientId = localStorage.getItem('ID');
    let technicianName = null;
    let payment = null;

    const Register=(e)=>{

      e.preventDefault()
      const Appointment={patientId,doctorName,testName,technicianName,payment,date}
      console.log(Appointment)
      fetch("http://localhost:8080/appointment/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(Appointment)
  }).then(response => {
    if (response.status === 200) {
      addNotification({
      title: 'Notification',
      message:"Appointment is confirmed",
      native:true     
      })
      window.location.href = '/PatientMain'
    } else {
      addNotification({
      title: 'status',
      message:"Appointment confirmation failed",
      native:true        
      })
    }
    });
  }

	useEffect(() => {
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

    useEffect(() => {
		loadDoctors();
	}, []);

	const loadTests = async () => {
		const result1 = await axios.get(
			"http://localhost:8080/test/getAll",
			{
				validateStatus: () => {
					return true;
				},
			}
		);

        setTests(result1.data);
	};
    useEffect(() => {
        loadTests();
    }, []);
    
    const handleChange1 = (event1) => {
        setSelectedTest(event1.target.value);
      };    
       
    

    const handleChange = (event) => {
        setSelectedDoctor(event.target.value);
      };

      const handleDate = (e) => {
        setDate(e.target.value);
      };

    return(
      <div>
      <PatientNavBar/>
      
      <div class="offset-md-4">
      <h1>Make Appointment</h1>
      
<body><br></br>
<form>
<div class="form-group col-md-4">
      <label for="inputState">Select test</label>
      <select id="dropdown" class="form-control" value={testName} onChange={handleChange1}>
        <option value="">Select</option>
        {tests.map((test) => (
          <option key={test.id} value={test.value}>
            {test.testName}
          </option>
        
      ))}
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputTest">Select Doctor</label>
      <select id="inputTest" class="form-control" value={doctorName} onChange={handleChange}>
        <option value="">Select...</option>
        {doctors.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        
      ))}
      </select>
    </div><br></br>
  <div>
    <input type="date" onChange={handleDate} />
  </div ><br></br>
  <div>
  <button type="submit" class="btn btn-primary" onClick={Register}>Submit</button>
  </div>
</form>
</body>
</div>
</div>
    );
}