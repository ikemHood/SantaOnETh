import { Link } from "react-router-dom";
import { useGlitch } from 'react-powerglitch'

function AirdropCard() {
  const glitch = useGlitch()
  return (
    <div className="relative top-[20vh] w-full justify-center flex">
      <div className="w-[90%] py-4 rounded-xl sm:w-[420px] mb-28 bg-white/30 shadow-2xl shadow-purple-400 backdrop-blur-md md:w-[700px] overflow-y-auto flex flex-col items-center">
      <h1 ref={glitch.ref} className="font-extrabold tracking-wider font-christmas space-y-16 text-5xl sm:text-6xl text-center text-gray-100 mt-4" >
        Santa
      </h1>
      <p className="mt-4 w-4/5 text-gray-200 text-center text-2xl sm:text-3xl">
        Santa meme built on ethereum in the spirit of Christmas, to bring good Xés into our investors wallets
      </p>

      <div className="flex flex-col gap-5">
        <Link
          // onClick={}
          className="py-2 mt-5 px-4 rounded-md text-white font-semibold text-xl bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-300 via-blue-500 to-purple-600 hover:bg-red-400/50"
          to={"#"}
        >
          Buy Santa Now
        </Link>
      </div>
      </div>
      </div>
  );
}

export default AirdropCard;
