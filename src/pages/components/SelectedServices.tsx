import React from "react";
import Image from "next/image";
import { AiOutlineCalendar } from "react-icons/ai/index";
import {CiLocationOn} from 'react-icons/ci/index'
type Props = {};

export default function SelectedServices({}: Props) {
  return (
    <>
      <h2 className="absolute h-[55px] w-[600px] font-bold font-noto left-[50px] right-[397px] top-[482px]   text-[40px] leading-[54px] tracking-[-0.3px] text-[#262626]">
        Selected Services
      </h2>
      <div className="border-box absolute w-[650px] h-[240px] left-[50px] top-[577px] bg-[#FFFFFF] border border-gray-300 rounded-2xl">
        {/* IMAGE */}
        <img
          className="absolute w-[120px] h-[120px] left-[35px] top-[60px]"
          src="https://gcdnb.pbrd.co/images/SnW5aIfiu6gJ.png?o=1"
          alt="Image"
        />

        <span className="absolute h-[50px] left-[179px] right-[35px] top-[33px] font-noto font-semibold text-[30px] leading-[41px] tracking-[-0.3px] text-[#262626]">
          Japanese lessons
        </span>
        <AiOutlineCalendar className="absolute w-[24px] h-[24px] left-[179px] top-[88px]" />

        <span className="absolute w-[173px] h-[27px] left-[215px] top-[86px] font-noton font-medium	 text-[20px] leading-[27px] tracking-[-0.3px] text-[#718096]">
          Nov 7, 2020 · 11:30
        </span>
        <CiLocationOn className="absolute w-[24px] h-[24px] left-[179px] top-[125px]" />

        <span className="absolute w-[173px] h-[27px] left-[215px] top-[125px] font-noton font-medium	 text-[20px] leading-[27px] tracking-[-0.3px] text-[#718096]">Client`s place</span>
      <span className="absolute width-[155px] height-[41px] left-[179px] top-[160px] font-noto font-semibold text-[30px] leading-[41px] tracking-[-0.3px] text-[#262626]">Rp 350.000</span>
      </div>
    </>
  );
}
