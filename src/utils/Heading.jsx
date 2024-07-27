import React from 'react'

const Heading = ({heading , para}) => {
  return (
    <div className=' text-center text-[#444]'>
        <h1 className=' font-bold text-2xl'>{heading}</h1>
        <p>{para}</p>
    </div>
  )
}

export default Heading