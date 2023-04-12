import React from 'react'

type Props = {}

function TermCondtion({}: Props) {
  return (
    <div className=''>
    <input
    className='absolute left-[12.5%] w-10 h-10 right-[12.5%] top-[249%] bottom-[12.5%] bg-[#616161] '
    
    type="checkbox" id="yes" name="yes"></input>
    <span className='absolute  w-[600px] h-[70px] right-[50px] left-[120px] top-[1650px] font-noto font-medium leading-[35px] text-[26px] tracking-[-0.3px]'>Lorem ipsum dolor sit amet, consectetur <span className='text-blue-500'>adipiscing elit,</span> sed do eiusmod</span>

</div>
  )
}

export default TermCondtion