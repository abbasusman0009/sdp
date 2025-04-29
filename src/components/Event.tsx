import React from 'react'
import { YouthCard } from './YouthCard'
import { Button } from '@material-tailwind/react'

export const Event = () => {
  return (
    <div className='mt-20 px-4'>
      <div className='text-center space-y-4'>
        <h1 className='font-inter font-semibold text-3xl capitalize text-[#000000]'>recent events & activities</h1>
        <p className='text-[#000000] font-inter text-md capitalize'>Stay informed with the latest political news, election schedules, and SDP activities</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <YouthCard />
        <YouthCard />
        <YouthCard />
        <YouthCard />
        <YouthCard />
        <YouthCard />
      </div>
      <div className='text-center mb-4'>
        <Button className='rounded border border-[#50E9A2] font-normal text-[#565656] p-2 w-[104px]'>View all</Button>
      </div>
    </div>
  )
}
