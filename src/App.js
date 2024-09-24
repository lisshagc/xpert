
import './App.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
// import Dashboard from './component/Dashboard';
// import Navbar  from './component/Navbar';
// import HeaderNav  from './component/HeaderNav';
// import FooterNav from './component/FooterNav';
import Login from './component/Login';
import Home from './Home.jsx';
import Department from './component/Department/Department.jsx';
import Subject from './component/Subject/Subject.jsx';
import Teacher from './component/Teacher/Teacher.jsx';
import AdminUser from './component/AdminUser/AdminUser.jsx';
import Course from './component/Course/Course.jsx';
import { useState, useEffect } from 'react';
import DepartmentCreate from './component/Department/DepartmentCreate.jsx';
// import PrivateRoute from './PrivateRoute.jsx';
function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true"); // Save login state to localStorage
  };

  useEffect(() => {
    if (!isLoggedIn) {
      localStorage.removeItem("isLoggedIn");
    }
  }, [isLoggedIn]);


  return (

    <Router>
      <div className="App">
        <Routes>               
          <Route path="/department" element={<Department />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/adminuser" element={<AdminUser />} />
          <Route path="/course" element={<Course />} />
          <Route path="/" element={<Login />} /> 
          <Route path="/home" element={<Home />} /> 
          <Route path="/departmentcreate" element={<DepartmentCreate />} /> 
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;




















// <div>
    //   <Login />
    // </div>
    // <div className="App">
    //   <div className="container-fluid">
    //     <div className="row">
    //       <div className="col-2 side-nav">          
    //         <Navbar />
    //       </div>
    //       <div className="col-10 main-content">
    //         <div className="row">
    //           <HeaderNav />
    //         </div>
    //         <div className="row mt-5">
    //           <Dashboard />
    //         </div>
    //         <div className="row mt-5">
    //           <FooterNav />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>