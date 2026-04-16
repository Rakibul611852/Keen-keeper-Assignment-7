import React from 'react'
import { MdOutlinePhoneInTalk } from 'react-icons/md';
const CallList = () => {
  return (
   <div class="px-6 pt-6 pb-4 flex items-center gap-4 shadow-xl mt-20 border border-gray-200 rounded-xl">
      <div class="w-12 h-12 rounded-2xl flex items-center justify-center ">
        <span className='text-4xl font-bold'><MdOutlinePhoneInTalk/></span>
        <i class="fa-solid fa-sparkles text-white text-2xl"></i>
      </div>
      <div>
        <p class="font-semibold"><span className='text-3xl font-bold'>Text</span> with <span></span></p>
        <p class="text-zinc-400 text-sm flex items-center gap-1">
          <i class="fa-solid fa-calendar-day"></i>
          March 28, 2026
        </p>
      </div>
    </div>
  )
}
export default CallList;