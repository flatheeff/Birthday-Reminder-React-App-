import React from 'react'
import './App.css';
import Navbar from './components/Navbar'

import {
  BrowserRouter,
  Route,
  Routes
}
  from 'react-router-dom';
import EmployeeDetails from './pages/EmployeeDetails';
import MainPage from './pages/MainPage';
import Register from './pages/Register';
import Footer from './components/Footer';
import Birth from './pages/Birth';




const App = () => {
  return (
    <BrowserRouter>
  <div className="bg-opacity-75 bg-no-repeat bg-cover bg-[url('https://files.123freevectors.com/wp-content/original/510596-blue-birthday-background-image.jpg')] bg-blend-darken">
      <Navbar/>
        <Routes>

          <Route path="/" element={<MainPage/>} />
          <Route path="/details" element={<EmployeeDetails />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/birthday" element={<Birth/>}/>
                  </Routes>
        <Footer/>
      </div>
     
    </BrowserRouter>
  );
}

export default App;
