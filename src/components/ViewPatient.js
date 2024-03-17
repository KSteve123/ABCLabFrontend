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

const PatientsView = () => {
	const [patients, setPatients] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		loadPatients();
	}, []);

	const loadPatients = async () => {
		const result = await axios.get(
			"http://localhost:8080/patient/getAll",
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
			`http://localhost:8080/patient/delete/${id}`
		);
		loadPatients();
	};

	

	return (
		<section>
			<Search
				search={search}
				setSearch={setSearch}
			/>
			<table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Address</th>
						<th>Phone Number</th>
						<th colSpan="3">Actions</th>
					</tr>
				</thead>

				<tbody className="text-center">
					{patients
						.filter((pt) =>
							pt.email
								.toLowerCase()
								.includes(search)
						)
						.map((patient, index) => (
							<tr key={patient.id}>
								<th scope="row" key={index}>
									{index + 1}
								</th>
								<td>{patient.name}</td>
								<td>{patient.email}</td>
								<td>{patient.address}</td>
								<td>{patient.phone}</td>
								<td className="mx-2">
									<Link
										to={`/PatientProfile/${patient.id}`}
										className="btn btn-info">
										<FaEye />
									</Link>
								</td>
								<td className="mx-2">
									<Link
										to={`/EditPatient/${patient.id}`}
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
	);
};

export default PatientsView;