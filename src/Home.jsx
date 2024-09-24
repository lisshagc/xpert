// import { useState } from 'react';
import './App.css';
import Dashboard from './component/Dashboard';
import Navbar  from './component/Navbar';
import HeaderNav  from './component/HeaderNav';
import FooterNav from './component/FooterNav';
// import Login from './component/Login';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Department from './component/Department/Department';
// import { Outlet } from 'react-router-dom';

function Home() {
  return (
    // <div>
    //   <Login />
    // </div>

    
    
      <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 side-nav">          
            <Navbar />        
          </div>
          <div className="col-20 main-content">
            <div className="row" id="Headernav">
              <HeaderNav />
            </div>
            <div id="Dashboard" className="row mt-5">
              <Dashboard />              
            </div>
            
            <div className="row mt-5">
              <FooterNav />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
}

export default Home;