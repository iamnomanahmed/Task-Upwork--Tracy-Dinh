import React from 'react'
import {RxCross1} from 'react-icons/rx/index'
type Props = {}

export default function Headers({}: Props) {
  return (
    <div className='absolute w-[750px] h-[218px] left-[0px] right-[0px] bg-[#262626]'>
 <h1 className='absolute w-[570px] height-[137px] left-[50px] top-[34px] font-noto font-bold text-5xl leading-[68px] tracking-[-0.3px] text-[#ffff]'>Choose the form of payment </h1>
 <RxCross1 className='absolute top-[35px] left-[670px]  text-[35px] text-white'/>
    </div>
  )
}