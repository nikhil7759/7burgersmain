import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="bg-[#F4EBDC] flex flex-col   justify-center items-center pb-[10px] ">
      <img
        src="/logo.svg"
        alt="logo"
        className="w-[100px] h-[70px] md:w-[150px] lg:w-[150px] lg:h-[104px] md:h-[104px]"
      />
      <div className="w-[90%] h-[1px] bg-[#A1A1A1] mb-1"></div>
      <div className="grid md:grid-cols-4 lg:grid-cols-6  grid-cols-2 gap-4 w-[90%]    p-2">
        <div className="flex justify-center       ">
          <div className="flex flex-col gap-2 w-full sm:w-auto">
            <div className="basker_main font-[600] text-[21px] leading-[26px]">
              Reach us
            </div>
            <div className="flex gap-2 justify-start items-center ">
              <img src="/phone.svg" alt="phone" className="w-[17px] h-[17px]" />
              <div className="basker text-[15px] leading-[18px]">
                8800994086
              </div>
            </div>
            <div className="flex gap-2 ">
              <img
                src="/message.svg"
                alt="phone"
                className="w-[17px] h-[17px]"
              />
              <a className="basker text-[15px] leading-[18px]">
                sevenburgersrh@sevenseaskitchens.com
              </a>
            </div>
            <div className="flex gap-2">
              <img
                src="/map-pin.svg"
                alt="phone"
                className="w-[17px] h-[17px]"
              />
              <div className="basker text-[15px] leading-[18px]">
                Inside seven seas hotel <br /> 12, M2k rd , Manglam place
                <br />
                Rohini,New delhi, Delhi 110085
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center    ">
          <div className="flex flex-col gap-2">
            <div className="basker_main font-[600] text-[16px] leading-[26px]">
              Company
            </div>
            <Link className="basker text-[15px] leading-[18px]">About</Link>
            <Link to={"/contact"} className="basker text-[15px] leading-[18px]">
              Contact
            </Link>
            <Link className="basker text-[15px] leading-[18px]">Blogs</Link>
          </div>
        </div>
        <div className="flex justify-center     ">
          <div className=" flex flex-col gap-2">
            <div className="basker_main font-[600] text-[16px] leading-[26px]">
              Legal
            </div>
            <Link className="basker text-[15px] leading-[18px]">
              Privacy Policy
            </Link>
            <Link className="basker text-[15px] leading-[18px]">
              Terms & Services
            </Link>
            <Link className="basker text-[15px] leading-[18px]">
              Terms of Use
            </Link>
            <Link className="basker text-[15px] leading-[18px]">
              Refund Policy
            </Link>
          </div>
        </div>
        <div className="flex justify-center    gap-2     ">
          <div className="flex flex-col gap-2">
            <div className="basker_main font-[600] text-[16px] leading-[26px]">
              Quick Links
            </div>
            <Link className="basker text-[15px] leading-[18px]" to="/">
              Menu
            </Link>
            <Link className="basker text-[15px] leading-[18px]" to="/">
              FAQ
            </Link>
          </div>
        </div>
        <div className="lg:flex md:hidden hidden lg:col-span-2     justify-center items-center ">
          <Newsletter />
        </div>
      </div>
      <div className="lg:hidden md:flex block ">
        <Newsletter />
      </div>
      <div className="w-[90%] h-[1px] bg-[#A1A1A1] mb-1"></div>
      <div className="inter flex justify-between w-[70%] font-[400] text-[14px] leading-[14px] text-[#686868]">
        <div>Terms and Conditions & Privacy Policy</div>

        <div>Copyright © 2024 Seven burger IN</div>
      </div>
    </div>
  );
};

export default Footer;
