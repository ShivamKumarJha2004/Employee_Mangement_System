import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUserRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isAdminLogin, setIsAdminLogin] = useState(false); // New state for login mode
  const navigate = useNavigate();

  const formHandler = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous error messages

    try {
      const url = isAdminLogin
        ? 'http://localhost:4001/emp/adminlogin'
        : 'http://localhost:4001/emp/login';

      const response = await axios.post(url, { email, password });


      if (response.data.user) {
        localStorage.setItem('userData', JSON.stringify(response.data.user)); // Store the user data
        console.log("hi");
        
        localStorage.setItem('loggedInEmail', email);
      }
      alert(isAdminLogin ? 'Admin login successful!' : 'Employee login successful!');
      setUserRole(isAdminLogin ? 'admin' : 'employee');
      navigate(isAdminLogin ? '/admindashboard' : '/empdashboard');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        alert(error.response.data.message || 'Login failed');
        setEmail('');
        setPassword('');
      } else {
        setErrorMessage('Network error. Please try again later.');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-r from-teal-300 to-emerald-900 px-4 sm:px-6 lg:px-8">
  <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 max-w-sm sm:max-w-md w-full h-[27rem] sm:h-auto flex flex-col justify-center">
    {/* Adjusted h-[34rem] for mobile and added flex layout with justify-center */}
    <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center text-gray-800 mb-6">
      {isAdminLogin ? 'Admin Login' : 'Employee Login'}
    </h1>

    <form onSubmit={formHandler} className="flex flex-col">
      <input
        className="border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <input
        className="border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
      />
      {errorMessage && <p className="text-red-500 text-sm sm:text-base mb-2">{errorMessage}</p>}
      <button className="bg-teal-600 text-white rounded-md py-2 hover:bg-teal-700 transition duration-300 text-sm sm:text-base">
        Login
      </button>
    </form>

    <div className="flex justify-between mt-4">
      <button
        className="text-teal-600 hover:underline text-sm sm:text-base"
        onClick={() => setIsAdminLogin(!isAdminLogin)} // Toggle between admin and employee login
      >
        {isAdminLogin ? 'Login as Employee' : 'Login as Admin'}
      </button>
      <a href="#" className="text-teal-600 hover:underline text-sm sm:text-base">
        Forgot Password?
      </a>
    </div>
  </div>
</div>
  );
};

export default Login;
