import React, { useEffect, useState } from 'react';
import CreateTask from '../Other/CreateTask';
import AllTask from '../Other/AllTask';
import axios from 'axios';

const AdminDashboard = () => {
  const [user, setUser] = useState([]); // Initialize user with null
 
  useEffect(()=>{
    const getData=async()=>{
      try {
        const response=await axios.get('http://localhost:4001/emp/getdata')
       console.log(response.data.data);
        setUser(response.data.data)
       
  
   } catch (error) {
        console.log(error);
          
   }
   
   }
   getData();
  },[])
 

  
  
  return (
    <div>
      <CreateTask  />
     
        <AllTask data={user} />
      
    </div>
  );
};

export default AdminDashboard;
