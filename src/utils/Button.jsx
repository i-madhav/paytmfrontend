import React from 'react'

const Button = ({text , onClick}) => {
  return (
    <div className=' w-full text-center font-bold text-white bg-black p-2 rounded cursor-pointer' onClick={onClick}>{text}</div>
  )
}

export default Button