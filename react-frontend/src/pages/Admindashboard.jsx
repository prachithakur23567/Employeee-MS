import React from 'react'
 import { useAuth } from '../context/authContext'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminSidebar from '../components/dashborad/AdminSidebar'
import Navbar from '../components/dashborad/Navbar'
import AdminSummary from '../components/dashborad/AdminSummary'

const Admindashboard = () => {

  const {user,loading} = useAuth()
    // const navigate = useNavigate()
    // if(loading){
    //   return <div> Loading....</div>
    // }
    // if(!user){
    //   navigate("/login")
    // }
  return (
    <div className='flex'>
<AdminSidebar/>
<div className='flex-1 ml-64 bg-gray-100 h-screen'>
<Navbar/>
{/* <AdminSummary/> */}
<Outlet/>
</div>
    </div>
  )
}

export default Admindashboard
