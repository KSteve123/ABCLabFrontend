import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import Search from "../common/Search";
import PatientNavBar from "../common/PatientNavBar";

const ViewAppointments = () => {
	const [patients, setPatients] = useState([]);
	const [search, setSearch] = useState("");
    let patientId = localStorage.getItem('ID');

	useEffect(() => {
		loadPatients();
	}, []);

	const loadPatients = async () => {
		const result = await axios.get(
			"http://localhost:8080/appointment/appointment/all/"+patientId,			{
				validateStatus: () => {
					return true;
				},
			}
		);
		
			setPatients(result.data);
            console.log(patients)
           
		
	};


	

	return (
		<div>
			<PatientNavBar/>
		<section>
            <div class="offset-md-2 col-md-8 mt-2  p-2">
			<Search
				search={search}
				setSearch={setSearch}
			/>
            
			<table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
                        <th> </th>
						<th>Appointment ID</th>
						<th>Doctor Name</th>
						<th>Test</th>
						<th>Payment</th>
						<th>Date</th>
					</tr>
				</thead>

				<tbody className="text-center">
					{patients
						.filter((pt) =>
							pt.date
								
								.includes(search)
						)
						.map((patient, index) => (
							<tr key={patient.id}>
								<th scope="row" key={index}>
									{index + 1}
								</th>
								<td>{patient.id}</td>
								<td>{patient.doctorName}</td>
								<td>{patient.testName}</td>
								<td>{patient.payment}</td>
                                <td>{patient.date}</td>
							</tr>
						))}
				</tbody>
			</table>
            </div>
		</section>
		</div>
	);
};

export default ViewAppointments;