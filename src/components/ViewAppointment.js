import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import {
	FaEdit,
	FaEye,
	FaTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search";
import StaffNavBar from "../common/StaffNavBar";

const AppiontmentsView = () => {
	const [patients, setPatients] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		loadPatients();
	}, []);

	const loadPatients = async () => {
		const result = await axios.get(
			"http://localhost:8080/appointment/getAll",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		
			setPatients(result.data);
           
		
	};

    const handleDelete = async (id) => {
		await axios.delete(
			`http://localhost:8080/appointment/delete/${id}`
		);
		loadPatients();
	};

	

	return (
		<div>
			<StaffNavBar/>
		<section>
			<Search
				search={search}
				setSearch={setSearch}
			/>
			<table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
						<th>Appointment ID</th>
						<th>Patient ID</th>
						<th>Technician ID</th>
						<th>Test Name</th>
						<th>Doctor Name</th>
                        <th>Payment</th>
                        <th>Date</th>
						<th colSpan="3">Actions</th>
					</tr>
				</thead>

				<tbody className="text-center">
					{patients
						.filter((pt) =>
							pt.patientId
								.toLowerCase()
								.includes(search)
						)
						.map((patient) => (
							<tr key={patient.id}>
								
								<td>{patient.id}</td>
								<td>{patient.patientId}</td>
								<td>{patient.technicianID}</td>
								<td>{patient.testName}</td>
                                <td>{patient.doctorName}</td>
                                <td>{patient.payment}</td>
                                <td>{patient.date}</td>
								<td className="mx-2">
									<Link
										to={`/AppointmentEdit/${patient.id}`}
										className="btn btn-warning">
										<FaEdit />
									</Link>
								</td>
								<td className="mx-2">
									<button
										className="btn btn-danger"
                                        onClick={() =>
											handleDelete(patient.id)
										}
										>
										<FaTrashAlt />
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</section>
		</div>
	);
};

export default AppiontmentsView;