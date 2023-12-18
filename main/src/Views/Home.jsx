import SantaIsComing from "../assets/santa-reindeer.gif"
import Background from '../components/newBg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SnowEffect from '../components/snow'
import { useGlitch } from 'react-powerglitch'

function Home() {
  const glitch = useGlitch()
  
  return (
    <div className="font-sofia">
      <SnowEffect />
      <Navbar />
      {/* <Bg /> */}
      <Background />
      <div className='h-[30vh]'></div>
      <div className="relative top-[20vh] w-full justify-center items-center flex flex-col">
        <img src={SantaIsComing} alt="santa is coming" className='scale-x-[-1] w-[300px]' />
        <h1 ref={glitch.ref} className="glitch font-christmas font-extrabold tracking-wider text-5xl sm:text-7xl text-center text-red-600 mt-4">
          <b>Santa</b> is Coming
        </h1>
      </div>
      <div className='h-[13vh]'></div>
      {/* <Audio /> */}
      <Footer />
    </div>
  )
}

export default Home
