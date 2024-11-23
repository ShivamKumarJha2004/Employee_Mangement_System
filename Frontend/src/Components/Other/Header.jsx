import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({userData}) => {
console.log(userData);

  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.setItem('userRole','') // Example: clear stored token
 window.location.reload();
    navigate('/', { replace: true });

}
  return (
    <div className='text-white font-semibold flex   justify-between p-10  h-screen md:text-3xl text-xl '>
      <div>
        <h1 className='font-medium'>Hello,
            <br />
            <span className='font-bold'>{userData} 👋</span>
           
        </h1>
        </div>
        <div className='mt-5 md:mt-0'>
            <button className='bg-red-500 px-3 py-2 font-semibold rounded-md text-xl hover:bg-red-800 'onClick={handleLogout}>Log Out</button>
        </div>
    </div>
  )
}

export default Header