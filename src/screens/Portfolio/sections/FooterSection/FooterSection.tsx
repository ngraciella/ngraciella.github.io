import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-[1444px] h-52 relative mt-[76px] bg-transparent">
      <div className="-left-px w-[1442px] h-[210px] bg-[#d7d7d7] opacity-[0.22] absolute -top-px" />

      <div className="absolute top-[114px] left-[676px] opacity-80 [font-family:'Poppins',Helvetica] font-normal text-[#6d6d6d] text-lg tracking-[0.39px] leading-9 whitespace-nowrap">
        NP • 2025
      </div>

      <div className="absolute top-[60px] left-[644px] opacity-80 [font-family:'Poppins',Helvetica] font-normal text-[#6d6d6d] text-lg text-center tracking-[0.39px] leading-9 whitespace-nowrap">
        Designed with ♡
      </div>
    </footer>
  );
};
