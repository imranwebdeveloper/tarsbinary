import UL from "./UL";
import shopping from "./img/shopping-bag.png";
import search from "./img/search.png";
import logo from "./img/tars.png";
import bar from "./img/bar.png";
import { useState } from "react";
import Menu from "./Menu";

function App() {
  const [toggle, setToggle] = useState(false);

  const handler = () => {
    setToggle(!toggle);
  };

  return (
    <header className="bg-[#323233] text-white">
      {toggle && <Menu handler={handler} />}
      <div className=" mx-auto max-w-[980px]  ">
        <div className="navbar justify-between text-[f7f] ">
          <div className="navbar-start w-auto ">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost md:hidden"
                onClick={handler}
              >
                {!toggle && <img src={bar} alt="" className="w-8" />}
              </label>
            </div>
            <div className="hidden md:flex  px-2 ">
              <img src={logo} alt="" className="image-full w-14" />
            </div>
          </div>
          <div className=" flex-1 ">
            <ul className="menu  menu-horizontal w-full text-small hidden md:flex  justify-between">
              <UL />
            </ul>
          </div>
          <div className="flex justify-center w-full   md:hidden">
            <img src={logo} alt="" className="image-full  w-16 h-12 " />
          </div>

          <div className="navbar-end   w-auto  px-3   ">
            <div className="flex items-center gap-2 ">
              <div className="">
                <img
                  src={search}
                  alt=""
                  className="w-6 cursor-pointer hidden md:flex "
                />
              </div>
              <div className="">
                <img
                  src={shopping}
                  alt=""
                  className="w-8 md:w-6 cursor-pointer "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
