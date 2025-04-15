import React from 'react'

export const Cta = () => {
  return (
    <div className='bg-[#FFF9F5] text-center mt-20 p-20'>
      <div className='space-y-4'>
        <h1 className='font-inter font-semibold text-3xl capitalize text-[#000000]'>Ready to Make a Difference?</h1>
        <p className='text-[#000000]  font-inter text-md capitalize'>Join thousands of progressive youths who are working together to build a better Nigeria. Your voice matters.</p>
      </div>
      <div className='mt-6'>
        <button className="hero__button bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 mr-4">Become A Member</button>
        <button className="hero__button border text-[#1BB86F]  border-[#1BB86F]  px-4 py-2 rounded hover:bg-green-500 hover:text-white mr-4">volunteer with us</button>
      </div>
    </div>
  )
}
