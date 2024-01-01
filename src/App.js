import React from 'react'
import './App.css';
import {
BrowserRouter,
Route,
Routes
}
  from 'react-router-dom';
import EmployeeDetails from './pages/EmployeeDetails';


const App = () => {
  return (
    <BrowserRouter>
    <div className="App">

<Routes>
<Route path="/details" element={<EmployeeDetails/>}/>
  </Routes>
  
    </div>
    </BrowserRouter>
  );
}

export default App;
