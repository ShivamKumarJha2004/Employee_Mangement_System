import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateTask = () => {
  const [tasktitle, settasktitle] = useState("");
  const [date, setdate] = useState("");
  const [category, setcategory] = useState("");
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [message, setMessage] = useState("");
  const [loggedInEmail, setLoggedInEmail] = useState("");

  useEffect(() => {
    // Retrieve the email of the logged-in user from localStorage
    const email = localStorage.getItem("userData");
 
   
    if (email) {
      setLoggedInEmail(email);
    }
  }, []);
 
  const handleLogout = () => {
    localStorage.clear(); // Clear tokens or authentication data
    alert("You have been logged out.");
    window.location.reload(); // Optionally reload the page or redirect
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      tasktitle,
      date,
      category,
      description,
      name,
      status: "newtask",
    };
    try {
      const response = await axios.post(
        "http://localhost:4001/emp/insertdata",
        taskData
      );
      if (response.data.success) {
        setMessage("Task Added Successfully!");
      } else {
        setMessage(response.data.message || "Failed to create Task");
      }

      settasktitle("");
      setdate("");
      setcategory("");
      setname("");
      setdescription("");
    } catch (error) {
      console.error("Error creating task:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-screen w-full p-6 mt-16 md:mt-0 md:p-10  text-white flex flex-col justify-center items-center rounded-md bg-[#1C1C1C]">
      {/* Logout Button and Logged-in Email */}
      <div className="w-full max-w-6xl mb-4 flex justify-between items-center">
        <span className="text-sm md:text-base text-gray-300">
          Logged in as: <strong>{loggedInEmail || "Guest"}</strong>
        </span>
        <button
          onClick={handleLogout}
          className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded-md text-white text-sm md:text-base"
        >
          Logout
        </button>
      </div>

      <div className="w-full max-w-6xl">
        <form
          className="flex flex-col md:flex-row md:justify-between md:items-start bg-[#2C2C2C] mt-5 md:mt-0 p-6 md:p-10 rounded-lg shadow-lg gap-6"
          onSubmit={handleOnSubmit}
        >
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-4xl font-medium mb-6">
              Create Task
            </h1>
            <div className="mb-4">
              <h3 className="text-sm md:text-base">Task Title</h3>
              <input
                value={tasktitle}
                onChange={(e) => settasktitle(e.target.value)}
                className="bg-transparent border-2 border-white rounded-md outline-none w-full py-2 px-3"
                placeholder="Enter task title"
              />
            </div>
            <div className="mb-4">
              <h3 className="text-sm md:text-base">Date</h3>
              <input
                value={date}
                onChange={(e) => setdate(e.target.value)}
                className="bg-transparent border-2 border-white rounded-md outline-none w-full py-2 px-3"
                type="date"
              />
            </div>
            <div className="mb-4">
              <h3 className="text-sm md:text-base">Assign to</h3>
              <input
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="bg-transparent border-2 border-white rounded-md outline-none w-full py-2 px-3"
                type="text"
                placeholder="Enter Employee Name"
              />
            </div>
            <div className="mb-4">
              <h3 className="text-sm md:text-base">Category</h3>
              <input
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                className="bg-transparent border-2 border-white rounded-md outline-none w-full py-2 px-3"
                type="text"
                placeholder="Enter category"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col">
            <div className="mb-6">
              <h3 className="text-sm md:text-base">Description</h3>
              <textarea
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                className="w-full h-40 outline-none rounded-md bg-transparent border-2 px-3 py-2 placeholder:text-sm placeholder:text-center"
                placeholder="Enter Description"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-green-800 hover:bg-green-900 px-3 py-2 w-full rounded-md text-sm md:text-base"
              >
                Create Task
              </button>
            </div>
          </div>
        </form>
        {message && <p className="text-center mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default CreateTask;
