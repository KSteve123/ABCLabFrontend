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

const UploadReport = () => {
	let navigate = useNavigate();

	const { id } = useParams();

	const [appointment, setAppointment] = useState({
		report:"",
		
	});
	const {
		report,
	} = appointment;

	useEffect(() => {
		loadAppointment();
	}, []);

	const loadAppointment = async () => {
		const result = await axios.get(
			`http://localhost:8080/appointment/appointment/${id}`
		);
		setAppointment(result.data);
	};

	const handleInputChange = (e) => {
		setAppointment({
			...appointment,
			[e.target.name]: e.target.value,
		});
	};
	const updatePatient = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:8080/appointment/update/report/${id}`,
			appointment
		);
		navigate("/viewAppointment");
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Upload Report Link</h2>
			<form onSubmit={(e) => updatePatient(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="name">
						Report Link
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="report"
						id="Name"
						required
						value={report}
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

export default UploadReport;