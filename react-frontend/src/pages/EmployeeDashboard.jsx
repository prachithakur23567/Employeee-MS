import React from 'react'
 import { useAuth } from '../context/authContext'
import { Outlet, useNavigate } from 'react-router-dom'

import Navbar from '../components/dashborad/Navbar'
import Sidebar from '../components/EmployeeDashboard/Sidebar'

const EmployeeDashboard = () => {
  return (
    <div className='flex'>
    <Sidebar/>
    <div className='flex-1 ml-64 bg-gray-100 h-screen'>
    <Navbar/>
    {/* <AdminSummary/> */}
    <Outlet/>
    </div>
        </div>
  )
}

export default EmployeeDashboard
