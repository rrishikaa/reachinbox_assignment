import React from 'react'
import { BsFillInboxFill } from 'react-icons/bs'
import { FaLocationArrow } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'
import { IoMdMail } from 'react-icons/io'
import { IoStatsChartSharp } from 'react-icons/io5'
import { TfiMenuAlt } from 'react-icons/tfi'

const Sidebar = () => {
  return (
    <aside className='h-[100vh] w-14 bg-gray-200 text-gray-500'>
      <div className='flex justify-center items-center'>
        <img src='/logo.png' />
      </div>
      <div className="flex flex-col gap-8 mt-36 items-center">
        <GoHomeFill />
        <IoMdMail />
        <FaLocationArrow />
        <TfiMenuAlt />
        <BsFillInboxFill />
        <IoStatsChartSharp />
      </div>
    </aside>
  )
}

export default Sidebar
