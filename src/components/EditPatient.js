import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import StaffNavBar from "../common/StaffNavBar";

import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";

const EditPatient = () => {
	let navigate = useNavigate();

	const { id } = useParams();

	const [patient, setPatient] = useState({
		name:"",
		email:"",
		address:"",
		phone:"",
	});
	const {
		name,
		email,
		address,
		phone,
	} = patient;

	useEffect(() => {
		loadPatient();
	}, []);

	const loadPatient = async () => {
		const result = await axios.get(
			`http://localhost:8080/patient/patient/${id}`
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
			`http://localhost:8080/patient/update/${id}`,
			patient
		);
		navigate("/viewPatient");
	};

	return (
		<div>
			<StaffNavBar/>
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
						name="name"
						id="Name"
						required
						value={name}
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
						name="email"
						id="email"
						required
						value={email}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="address">
						Your Address
					</label>
					<input
						className="form-control col-sm-6"
						type="address"
						name="address"
						id="address"
						required
						value={address}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="phone">
						Phone Number
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="phone"
						id="phone"
						required
						value={phone}
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
							to={"/ViewPatient"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
		</div>
	);
};

export default EditPatient;