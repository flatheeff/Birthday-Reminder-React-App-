import React from 'react'
import './App.css';
import Navbar from './Navbar'
import {
  BrowserRouter,
  Route,
  Routes
}
  from 'react-router-dom';
import EmployeeDetails from './pages/EmployeeDetails';
import MainPage from './pages/MainPage';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
        <Routes>

          <Route path="/" element={<MainPage/>} />
          <Route path="/details" element={<EmployeeDetails />} />
        </Routes>

      </div>
     
    </BrowserRouter>
  );
}

export default App;
