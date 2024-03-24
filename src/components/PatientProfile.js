import React, {
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import StaffNavBar from "../common/StaffNavBar";

const PatientProfile = () => {
	const {id} = useParams();

	const [patient, setPatient] = useState({
		name:"",
		email:"",
		address:"",
		phone:"",
	});

	useEffect(() => {
		const LoadPatient = async () => {
			const result = await axios.get(
				`http://localhost:8080/patient/patient/${id}`
			);
			setPatient(result.data);
			console.log(patient);
		};
		
		LoadPatient();
		// eslint-disable-next-line
	}, []);

	

	return (
		<div>
			<StaffNavBar/>
		<section
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<h5 className="my-3">
									{patient.name}
								</h5>
								<div className="d-flex justify-content-center mb-2">
									<button
										type="button"
										className="btn btn-outline-primary">
										Call
									</button>
									<button
										type="button"
										className="btn btn-outline-warning ms-1">
										Message
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Name
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{patient.name}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Email
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{patient.email}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Address
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{patient.address}
										</p>
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Phone Number
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{patient.phone}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</div>
	);
};

export default PatientProfile;