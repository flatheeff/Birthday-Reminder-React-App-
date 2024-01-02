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
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
  <div className=" bg-black bg-opacity-75 bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-vector/flat-golden-circle-balloons-birthday-background_52683-34659.jpg')] bg-blend-darken">
      <Navbar/>
        <Routes>

          <Route path="/" element={<MainPage/>} />
          <Route path="/details" element={<EmployeeDetails />} />
        </Routes>
        <Footer/>
      </div>
     
    </BrowserRouter>
  );
}

export default App;
