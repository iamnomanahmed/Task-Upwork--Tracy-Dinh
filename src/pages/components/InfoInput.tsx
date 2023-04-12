import React from 'react'

type Props = {}

export default function 
({}: Props) {

  return (
    <div>

        <span className='absolute w-[275px] h-[41px] left-[50px] text-[30px] top-[857px] font-noto font-semibold leading-[41px] tracking-[0.3px] text-[#262626]'>Enter your location</span>
        <input
        className='border-box absolute w-[650px] h-[100px] left-[50px] top-[918px] bg-[#FFFFFF]  border border-solid border-blue-200 rounded-lg  text-[30px] p-5
        placeholder:text-[30px] placeholder:absolute placeholder:top-8 placeholder:left-5

'
        type="text" placeholder='Enter Address'/>

        
<span className='absolute w-[275px] h-[41px] left-[55px] text-[30px] top-[1045px] font-noto font-semibold leading-[41px] tracking-[0.3px] text-[#262626]'>Note (optional)</span>
        <input
        className='border-box absolute w-[650px] h-[100px] left-[50px] top-[1115px] bg-[#FFFFFF]  border border-solid border-blue-200 rounded-lg text-[30px] p-5
        placeholder:text-[30px] placeholder:absolute placeholder:top-8 placeholder:left-5

'
        type="text" placeholder='Enter text here'/>
   
    </div>
  )
}

