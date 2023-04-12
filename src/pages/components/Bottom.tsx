import React from 'react'

type Props = {}

export default function Bottom({}: Props) {
  return (
 <div className='border-box absolute w-[750px] h-[160px] left-[0px] top-[1835px] border-t-2 shadow '>
  <button className='absolute w-[140px] h-[41px] left-[50px] top-[60px] font-semibold text-[30px] font-noto leading-[41px] tracking-[-0.3px] text-[#262626]'>Previous</button>
  <button className='absolute w-[240px] h-[100px] left-[460px] top-[30px] bg-[#1E21FF] rounded-2xl	'><span className='absolute w-[69px] h-[41px] left-[85px] top-[30px] text-center tracking-[-0.3px] font-noto text-[#FFFFFF] text-[30px]'>Next</span></button>
  </div>
  )
}

