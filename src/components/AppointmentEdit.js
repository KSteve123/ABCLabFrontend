import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";

import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";

const EditAppointment = () => {
	let navigate = useNavigate();

	const { id } = useParams();

	const [patient, setPatient] = useState({
		technicianID:"",
		payment:"",
	});
	const {
		technicianID,
		payment,
	} = patient;

	useEffect(() => {
		loadPatient();
	}, []);

	const loadPatient = async () => {
		const result = await axios.get(
			`http://localhost:8080/appointment/appointment/${id}`
		);
		setPatient(result.data);
	};

	const handleInputChange = (e) => {
		setPatient({
			...patient,
			[e.target.name]: e.target.value,
		});
	};
	const updatePatient = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:8080/appointment/update/${id}`,
			patient
		);
		navigate("/viewPatient");
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Edit Patient</h2>
			<form onSubmit={(e) => updatePatient(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="name">
						Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="technicianID"
						id="Name"
						required
						value={technicianID}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="email">
						Email
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="payment"
						id="email"
						required
						value={payment}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				<div className="row mb-5">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to={"/ViewAppointment"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditAppointment;