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
	const [Appointment, setAppointments] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		loadAppointments();
	}, []);

	const loadAppointments = async () => {
		const result = await axios.get(
			"http://localhost:8080/appointment/getAll",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		
			setAppointments(result.data);
           
		
	};

    const handleDelete = async (id) => {
		await axios.delete(
			`http://localhost:8080/appointment/delete/${id}`
		);
		loadAppointments();
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
						<th>Report</th>
						<th colSpan="3">Actions</th>
					</tr>
				</thead>

				<tbody className="text-center">
					{Appointment
						.filter((pt) =>
							pt.patientId
								.toLowerCase()
								.includes(search)
						)
						.map((appointment) => (
							<tr key={appointment.id}>
								
								<td>{appointment.id}</td>
								<td>{appointment.patientId}</td>
								<td>{appointment.technicianID}</td>
								<td>{appointment.testName}</td>
                                <td>{appointment.doctorName}</td>
                                <td>{appointment.payment}</td>
                                <td>{appointment.date}</td>
								<td><a href={`http://Dropbox.com/${appointment.report}`} target="_blank">Link</a></td>
								<td className="mx-2">
									<Link
										to={`/AppointmentEdit/${appointment.id}`}
										className="btn btn-warning">
										<FaEdit />
									</Link>
								</td>
								<td className="mx-2">
									<Link
										to={`/UploadReport/${appointment.id}`}
										className="btn btn-warning">
										<FaEdit />
									</Link>
								</td>
								<td className="mx-2">
									<button
										className="btn btn-danger"
                                        onClick={() =>
											handleDelete(appointment.id)
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