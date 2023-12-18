import Tokenomics from "../components/Tokenomics/index";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SnowEffect from '../components/snow'
import Background from '../components/newBg'

function Token() {
  return (
    <div className="font-sofia">
      <Navbar />
      <SnowEffect />
      <Background />
      <div className='h-[10vh]'></div>
      <Tokenomics />
      <Footer />
    </div>
  );
}

export default Token;