import * as React from 'react';
import './App.css';
import Patientregistration from './components/PatientRegistration';
import Patientlogin from './components/PatientLogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserCheck from './components/ReturnUser';
import StaffSignUp from './components/StaffRegistration';
import AddTest from './components/AddTest';
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientsView from './components/ViewPatient';
import PatientProfile from './components/PatientProfile';
import PatientMain from './components/PatientMain';
import EditPatient from './components/EditPatient';
import EditProfile from './components/EditProfile';
import AddAppointment from './components/MakeAppointment';
import ViewAppointments from './components/PatientAppointments';
import StaffLogin from './components/StaffLogin';
import StaffMain from './components/StaffMain';
import StaffCheck from './components/ReturnStaff';
import AppiontmentsView from './components/ViewAppointment';
import EditAppointment from './components/AppointmentEdit';




function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route index element={<AppiontmentsView/>} />
    <Route path='/PatientRegistration' element={<Patientregistration/>} />
    <Route path='/ReturnUser' element={<UserCheck/>} />
    <Route path='/ReturnStaff' element={<StaffCheck/>} />
    <Route path='/PatientProfile/:id' element={<PatientProfile/>} />
    <Route path='/ViewPatient' element={<PatientsView/>} />
    <Route path='/EditPatient/:id' element={<EditPatient/>} />
    <Route path='/PatientMain' element={<PatientMain/>} />
    <Route path='/EditProfile/:id' element={<EditProfile/>} />
    <Route path='/MakeAppointment' element={<AddAppointment/>} />
    <Route path='/StaffLogin' element={<StaffLogin/>} />
    <Route path='/StaffMain' element={<StaffMain/>} />
    <Route path='/PatientAppointments/:id' element={<ViewAppointments/>} />
    <Route path='/AddTest' element={<AddTest/>} />
    <Route path='/AppointmentEdit/:id' element={<EditAppointment/>} />
    <Route path='/ViewAppointment' element={<AppiontmentsView/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
