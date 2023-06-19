import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import './App.css';
import './index.css';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import AddUser from './components/addUser';
import AddVehicle from './components/addVehicle';
import Vehicle from './components/vehicles';
import Owner from './components/owners';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' exact element={ <Dashboard/> } />
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/login" exact element={<Login />} />
      <Route path='/dashboard' exact element={<Dashboard />} />
      <Route path="/vehicles" exact element={<Vehicle />} />
      <Route path='/newVehicle' exact element={<AddVehicle />} />
      <Route path='/owners' exact element={<Owner/>} />
      <Route path='/newOwner' exact element={<AddUser />} />
    </Routes>
  </Router>
  );
}
export default App;
