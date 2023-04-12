import React from "react";

type Props = {};

export default function Box({}: Props) {
  return (
    <div className="box-border absolute w-[650px] h-[164px] left-[50px] top-[268px] bg-[#F7FAFC] shadow-md rounded-[20px]">

        <div className="rounded-full absolute w-[90px] h-[90px] left-10 top-10 bg-[#EDF2F7]" >
            <span className="absolute w-[14px] h-[54px] font-bold text-[40px] leading-[54px] left-8 top-5 text-center tracking-[-0.3px] uppercase text-[#262626]">J</span></div>
   <span className="absolute w-[88px] h-[55px] left-[155px] top-[28px] font-semibold text-[40px] leading-[54px] tracking-[-0.3px] text-[#262626]">John</span>
  <span  className="absolute w-[195px] h-[35px] left-[155px] top-[80px] font-noto font-medium text-[26px] leading-[35px] tracing-[-0.3px] text-[#718096]">{"(88) 99602-2404"}</span>
  <button className="absolute w-[142px] h-[90px] left-[467px] top-[37px] bg-[#EDF2F7] rounded-[10px]">
        <span className="font-noto font-semibold text-[26px] leading-[35px] text-center tracking-[-0.3px] text-[#262626]">Log out</span>
    </button>
    </div>

  );
}
