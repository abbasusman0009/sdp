import React from 'react'
import frame from '../assets/image/Frame 39.png'

export const YouthCard = () => {
  return (
    <div className="relative flex flex-col my-6 bg-white rounded-lg w-96 font-inter">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img src={frame} alt="Youth Card" />
      </div>
      <div className='flex items-center space-x-2 ml-4 '>
        <p className='bg-green-100 p-2 rounded-sm text-[#0E874E]'>Category</p>
        <p className='text-sm'>5 min read</p>
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-[#565656] text-xl font-semibold capitalize">
          youth mobilization visit
        </h6>
        <p className="text-slate-600 leading-normal font-light">
          The SDP Arewa Youths Mobilization Movement's strategy has shown positive results with increased youth participation in political activities...
        </p>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2">
        <button className="rounded-md bg-[#E99050] py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
          Read more
        </button>
      </div>
    </div>
  )
}
