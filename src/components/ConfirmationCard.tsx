import React from 'react'
export const ConfirmationCard = () => {
  return (
    <div className="bg-[#F5FFFA]  border-dashed border-[#0E874E] grid grid-cols-2 justify-center items-center shadow-sm border  rounded-lg w-[490px]  h-full p-6">
      <div className='space-y-8'>
        <p>Name:</p>
        <p>Membership ID:</p>
        <p>Membership Type:</p>
        <p>Regstration Date::</p>
      </div>
      <div className='space-y-8 self-end'>
        <p>Muhammad Munir Musa</p>
        <p>SDY-368141</p>
        <p>Standard</p>
        <p>24/03/2025</p>
      </div>
    </div>
  )
}
