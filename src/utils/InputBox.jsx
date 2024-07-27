import React from 'react'

const InputBox = ({placeholder , name , onChange , value}) => {
  return (
    <div className=' flex flex-col items-start space-y-1 p-1'>
        <label className=' font-bold'>{name}</label>
        <input type="text" placeholder={placeholder} className='outline-none border border-black rounded p-1 w-full' onChange={onChange} value={value}/>
    </div>
  )
}

export default InputBox