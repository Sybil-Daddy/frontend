import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="Footer w-[1184px] h-[64.19px] flex">
        <div className="FooterMenu  justify-center items-start gap-10 inline-flex">
          <div className="About text-white text-lg font-normal font-['Clash Grotesk'] leading-7">
            About
          </div>
          <div className="Schedule text-white text-lg font-normal font-['Clash Grotesk'] leading-7">
            Schedule
          </div>
          <div className="Press text-white text-lg font-normal font-['Clash Grotesk'] leading-7">
            Press
          </div>
          <div className="Collaboration text-white text-lg font-normal font-['Clash Grotesk'] leading-7">
            Collaboration
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
