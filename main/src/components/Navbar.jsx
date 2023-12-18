import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

function Navbar() {
  const page = window.location.pathname;
  const [navOpen, setNavOpen] = useState(false);
  // const isMobile = window.innerWidth <= 800;


  return (
    <section className="relative flex justify-center w-full">
      <div className="bg-transparent absolute top-[20px] flex border p-7 z-50 w-[80%] container rounded-full h-full items-center justify-between">
        <div className="md:flex w-full items-center justify-between hidden">
          <img src={Logo} className="w-[60px] rounded-full" alt="" />
          <div className="flex w-full justify-center gap-3 h-full items-center">
            <Link
              className={`bg-slate-300/10 px-3 py-2 text-lg rounded-md hover:bg-red-600 text-white ${page == "/" && "bg-red-600 text-white"
                }`}
              to="/"
            >
              <p>Home</p>
            </Link>
            <Link
              className={`bg-slate-300/10 px-3 py-2 text-lg rounded-md hover:bg-red-600 text-white ${page == "/about" && "bg-red-600 text-white"
                }`}
              to="/about"
            >
              <p>About</p>
            </Link>
            <Link
              className={`bg-slate-300/10 px-3 py-2 text-lg rounded-md hover:bg-red-600 text-white ${page == "/tokenomics" && "bg-red-600 text-white"
                }`}
              to="/tokenomics"
            >
              <p>Tokenomics</p>
            </Link>
            <Link
              className={`bg-slate-300/10 px-3 py-2 text-lg rounded-md hover:bg-red-600 text-white ${page == "/roadmap" && "bg-red-600 text-white"
                }`}
              to="/roadmap"
            >
              <p>Roadmap</p>
            </Link>
            <a
              href="#"
              target="_blank"
              // rel="noreferrer"
              className="rounded-lg border px-4 py-2 text-xl text-white bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-600 via-blue-500 to-purple-600 hover:scale-125 my-4"
            >
              Buy $Santa
            </a>
          </div>
          <div className="flex gap-2">
            <a href="https://twitter.com/SantaOnEth" target="_blank">
              <FaTwitter className="h-12 w-12 text-blue-400 hover:animate-pulse" />
            </a>
            <a href="https://t.me/" target="_blank">
              <FaTelegramPlane className="h-12 w-12 text-blue-700 hover:animate-pulse" />
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full md:hidden">
          <div
            onClick={() => setNavOpen(!navOpen)}
            className={
              "flex justify-between h-full w-full items-center mx-4 md:hidden text-white"
            }
          >
            <img src={Logo} className="w-[60px] rounded-full" alt="" />
            {navOpen ? (
              <AiOutlineClose size={20} className="ml-3" />
            ) : (
              <AiOutlineMenu size={20} className="ml-3" />
            )}
          </div>
          <div
            className={`absolute left-0 rounded-xl z-[1000] bg-white/50 backdrop-blur-sm w-full flex flex-col transition-all ease-in-out ${navOpen ? "top-16" : "top-[-100vh]"}`}
          >
            <ul className="p-4">
              <Link to="/">
                <li
                  className={`border-b p-2 hover:bg-red-600 rounded-md text-lg ${page == "/" && "bg-red-600 text-white"
                    }`}
                  onClick={() => setNavOpen(!navOpen)}
                >
                  Home
                </li>
              </Link>
              <Link to="/about">
                {" "}
                <li
                  className={`border-b p-2 hover:bg-red-600 rounded-md text-lg ${page == "/about" && "bg-red-600 text-white"
                    }`}
                  onClick={() => setNavOpen(!navOpen)}
                >
                  About
                </li>
              </Link>
              <Link to="/tokenomics">
                <li
                  className={`border-b p-2 hover:bg-red-600 rounded-md text-lg ${page == "/tokenomics" && "bg-red-600 text-white"
                    }`}
                  onClick={() => setNavOpen(!navOpen)}
                >
                  Tokenomics
                </li>
              </Link>
              <Link to="/roadmap">
                <li
                  className={`border-b p-2 hover:bg-red-600 rounded-md text-lg ${page == "/roadmap" && "bg-red-600 text-white"
                    }`}
                  onClick={() => setNavOpen(!navOpen)}
                >
                  Roadmap
                </li>
              </Link>
              <li className="flex w-full justify-center">
                <a
                  href="#"
                  // target="_blank"
                  // rel="noreferrer"
                  // onClick={() => setShow(!showModal)}
                  className="rounded-lg border px-4 py-2 text-xl text-white bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-600 via-blue-500 to-purple-600 hover:scale-125 my-4"
                >
                  Buy $Santa
                </a>
              </li>
              <li className="flex w-full justify-center">
                <div className="flex w-full justify-center gap-3 mb-2">
                  <a href="https://twitter.com/SantaOnEth" target="_blank">
                    <FaTwitter className="w-6 h-6 text-blue-600 hover:text-blue-500" />
                  </a>
                  <a href="https://t.me/" target="_blank">
                    <FaTelegramPlane className="w-6 h-6 text-blue-700 hover:text-blue-500" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
