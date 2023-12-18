import AirdropCard from "../components/Airdrop/Index";
import Bg from "../components/Bg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SnowEffect from '../components/snow'
import Background from '../components/newBg'
// import {useNavigate}

function Airdrop() {
  return (
    <div className="font-sofia">
      <Navbar />
      <SnowEffect />
      <Background />
      <div className='h-[20vh]'></div>
      <AirdropCard />
      <Footer />
    </div>
  );
}

export default Airdrop;
