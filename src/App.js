import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import './App.css';
import './index.css';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import AddUser from './components/addUser';
import Cart from './components/cart';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
      <Route path='/' exact element={ <Login/> } />
      <Route path='/cart' exact element={ <Cart/> } />

      <Route path='/dashboard' exact element={<Dashboard />} />
      <Route path='/newEmployee' exact element={<AddUser />} />
    </Routes>
  </Router>
  );
}
export default App;
