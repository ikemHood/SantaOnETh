import { GiChaingun, GiTakeMyMoney, GiReceiveMoney, GiCompass } from "react-icons/gi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlitch } from 'react-powerglitch'

function Utilities() {
  const [lotInfo, updateLotInfo] = useState("");
  const [domainInfo, updateDomianInfo] = useState("");
  const glitch = useGlitch()

  useEffect(() => {
    setTimeout(() => {
      updateLotInfo("");
    }, 15000);
  }, [lotInfo]);

  useEffect(() => {
    setTimeout(() => {
      updateDomianInfo("");
    }, 15000);
  }, [domainInfo]);
  return (
    <div className="relative top-[20vh] mb-10 w-full justify-center flex">
      <div className=" container flex flex-col justify-center w-full items-center h-full ">
        <h1 ref={glitch.ref} className=" tracking-wider font-semibold font-christmas text-4xl sm:text-5xl text-center uppercase text-white mt-4">
          Santa R-admap
        </h1>
        <p className="text-2xl text-center w-[300px] sm:w-[600px] text-white md:w-[620px] mb-5">
          Santa roadmap to maximize profit fot it's investors
        </p>
        <div className="flex gap-5 justify-center items-center flex-wrap">
          <div className="flex flex-col text-gray-200 text-xl shadow-lg shadow-purple-400 w-[300px] min-h-[300px] bg-white/30 rounded-lg p-3 border-l-4 border-purple-600">
            <div className="flex flex-col w-full justify-center h-full items-center">
              <h1 className="font-semibold text-3xl text-blue-800">
                Pre Launch
              </h1>
              <GiChaingun className="text-purple-500 h-16 w-16 my-2" />
            </div>
            <div className="justify-center w-full flex flex-col">
              <p className="text-xl text-start">
                Social Media Creation ✅
              </p>
              <p className="text-xl text-start">
                Website Launch ✅
              </p>
              <p className="text-xl text-start">
                Community Building ✅
              </p>
              <p className="text-xl text-start">
                Soft Marketing ✅
              </p>
              
            </div>
          </div>
          <div className="flex flex-col text-gray-200 text-xl shadow-lg shadow-purple-400 w-[300px] min-h-[300px] bg-white/30 rounded-lg p-3 border-l-4 border-purple-600">
            <div className="flex flex-col w-full justify-center h-full items-center">
              <h1 className="font-semibold text-3xl text-blue-800">
                Launch
              </h1>
              <GiReceiveMoney className="text-blue-400 h-16 w-16 my-2" />
            </div>
            <div className="justify-center w-full flex flex-col">
              
            <p className="text-xl text-start">
                Contract Creaction and Launch
              </p>
              <p className="text-xl text-start">
                KOL
              </p>
              <p className="text-xl text-start">
               Hard Marketing
              </p>
              <p className="text-xl text-start">
                1000 Holders
              </p>
              {/* <p className="text-lg text-center">{stakeInfo}</p> */}
              {/* <Link to="/stake"
              // onClick={() => updateStakeInfo("Stake Coming Soon")}
                className="self-center border rounded-lg py-2 px-5 bg-orange-800/90 hover:bg-orange-800/60 text-lg text-white"
              >
                Stake Now
              </Link> */}
            </div>
          </div>
          <div className="flex flex-col text-xl text-gray-200 shadow-lg shadow-purple-400 w-[300px] min-h-[300px] bg-white/30 rounded-lg p-3 border-l-4 border-purple-600">
            <div className="flex flex-col w-full justify-center h-full items-center">
              <h1 className="font-semibold text-3xl text-blue-800">
                Post Launch
              </h1>
              <GiTakeMyMoney className="text-green-400 h-16 w-16 my-2" />
            </div>
            <div className="justify-center w-full flex flex-col">
            <p className="text-xl text-start">
                CoinGecko Listing
              </p>
              <p className="text-xl text-start">
                Coinmarketcap Listing
              </p>
              <p className="text-xl text-start">
               CEX Listing
              </p>
              <p className="text-xl text-start">
                10000 Holders
              </p>
              {/* <p className="text-lg text-center">{lotInfo}</p> */}
              
            </div>
          </div>
          {/* <div className="flex flex-col text-xl shadow-lg shadow-white/75 w-[300px] min-h-[300px] bg-white/90 rounded-lg p-3 border-l-4 border-purple-600">
            <div className="flex flex-col w-full justify-center h-full items-center">
              <h1 className="font-semibold text-3xl text-blue-800">
                COREmunity Name Service
              </h1>
              <GiCompass className="text-orange-800/90 h-16 w-16 my-2" />
            </div>
            <div className="justify-center w-full flex flex-col">
              <p className="text-xl text-start">
                How does a (.Bull) Domain sounds? <br /> COREmunity Name Service will allow you get a custom and momerable name for your wallet. Powered by $BULL.
              </p>
              <p className="text-lg text-orange-800/90 text-center">{domainInfo}</p>
              <button
                onClick={() => updateDomianInfo("CNS Coming Soon")}
                className="self-center border rounded-lg py-2 px-5 bg-orange-800/90 hover:bg-orange-800/70 text-lg text-white"
              >
                Buy A Domain
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Utilities;
