import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <div className={`top-[35vh] bg-black relative  flex z-50`}>
      <div className="flex flex-col w-screen overflow-hidden h-auto justify-center my-5 gap-4 items-center">
       
        <div className="flex w-full justify-center gap-3 mb-2">
          <a href="https://twitter.com/SantaOnEth" target="_blank">
            <FaTwitter className="w-6 h-6 text-white hover:text-blue-500" />
          </a>
          <a href="#" target="_blank">
            <FaTelegramPlane className="w-6 h-6 text-white hover:text-blue-500" />
          </a>
        </div>
        <p className="text-slate-400">
          <span className="underline">
            <Link to="/#">Privacy Policy</Link>
          </span>{" "}
          |{" "}
          <span className="underline">
            <Link to="/#">Terms & Conditions</Link>
          </span>{" "}
          |{" "}
          <a href="mailto:support@santaoneth.xyz" className="underline">
            Help & Support
          </a>
        </p>
        <p className="text-center text-white font-bold">
          &copy; {new Date().getFullYear()} SantaOnEth&trade;
        </p>
      </div>
    </div>
  );
}
//
export default Footer;
