import React from 'react'
import { Link } from 'react-router-dom'

const BottomWarning = ({text , to , toText}) => {
  return (
    <div className='flex items-center p-2 text-lg space-x-1 mt-3 w-full justify-center'>
        <div className=' text-black'>
            <p>{text}</p>
        </div>

        <Link to={to}>
            <span className=' underline text-black font-semibold'>{toText}</span>
        </Link>
    </div>
  )
}

export default BottomWarning;