import React, { useContext, useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Auth/Login';
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { AuthContext } from './Components/Auth/AuthProvider';

const App = () => {
  const [userRole, setUserRole] = useState(() => localStorage.getItem("userRole") || null); // Retrieve from localStorage
  const value = useContext(AuthContext);

  useEffect(() => {
    if (userRole) {
      localStorage.setItem("userRole", userRole); // Save to localStorage
    }
  }, [userRole]);

  console.log(value);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login setUserRole={setUserRole} />} />
        <Route
          path="/empdashboard"
          element={userRole === 'employee' ? <EmployeeDashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/admindashboard"
          element={userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
};

export default App;
