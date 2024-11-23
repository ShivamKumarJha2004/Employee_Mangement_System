import { React, useState, useEffect } from "react";
import Header from "../Other/Header";
import TaskNumber from "../Other/TaskNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage once on component mount
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setUserData(parsedData);
      } catch (error) {
        console.error("Error parsing userData:", error);
      }
    }
  }, []); // Empty dependency array ensures this runs only once

  console.log("Current userData state:", userData);

  if (!userData) {
    // Show a loading state while userData is being retrieved
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header userData={userData.name} />
      
      <TaskNumber taskCount={userData.taskCount} />
      {console.log(userData.tasks)
      }
      <TaskList tasks={userData.tasks} />
    </div>
  );
};

export default EmployeeDashboard;
