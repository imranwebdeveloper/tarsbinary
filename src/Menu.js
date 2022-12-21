import React from "react";
import { MdOutlineClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import UL from "./UL";
import img from "./img/tars.png";

const Menu = ({ handler }) => {
  return (
    <div className="  text-[#c7c7d5] md:hidden ">
      <div className="flex xl:hidden flex-col fixed custom-menu top-0 left-0 w-full min-h-screen px-8 bg-black ">
        <div className="flex  items-center ">
          <div className=" flex-1">
            <MdOutlineClose
              className="text-[#c7c7d5] text-2xl cursor-pointer "
              onClick={handler}
            />
          </div>
          <div className="flex-1">
            <img src={img} alt="" srcset="" className="w-20 " />
          </div>
        </div>
        <div className="bg-[#3f3f3f64] text-[#c7c7d5] flex gap-2 px-3 py-2 items-center rounded-md">
          <span>
            <CiSearch />
          </span>
          <input
            type="text "
            className="bg-transparent outline-none w-full"
            placeholder="Search tarsbinary.net"
          />
        </div>
        <UL />
      </div>
    </div>
  );
};

export default Menu;
