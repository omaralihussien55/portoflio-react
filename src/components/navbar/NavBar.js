import { useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bg-white fixed w-full z-50">
      <nav className="shadow-lg">
        <div className="max-w-7xl mx-auto ">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 p-4">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <PaperAirplaneIcon className="h-6 w-6 text-primary" />
                  <span>Omar</span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 ">
              <LinksComponent/>
              </div>
            </div>
            {/* secondary */}

            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  {/* <MoonIcon className="h-6 w-6" /> */}
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>

            
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full  bg-gray-100/70 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8 op ">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
            <LinksComponent/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar


const LinksComponent=()=>{

    return(
        <>
               <a href="#" className="">
                  Home
                </a>
                <a href="#OurServices">Our Services</a>
                <a href="#Projects">Projects</a>
                <a href="#About">About </a>
                <a href="#Contact">Contact</a>
        </>
    )
}