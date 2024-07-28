import React from 'react'
import { Link } from 'react-router-dom';

const Suucessfull = () => {
  return (
    <div className=' bg-slate-500 flex flex-col h-screen items-center fixed top-0 left-0 bottom-[25rem]'>
        <h1 className=' text-white font-bold text-8xl'>Money Successfullly Transferred 🕊️</h1>
        <Link to={"/dashboard"} className=' bg-red-500 text-white font-semibold p-3 rounded'>
            Go to DashBoard
        </Link>
    </div>
  )
}

export default Suucessfull;