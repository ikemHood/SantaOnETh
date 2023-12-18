import { useState } from 'react'
import Bg from '../components/Bg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Audio from '../components/Audio'
import Utilities from '../components/Utilities/Index'
import Background from '../components/newBg'
import SnowEffect from '../components/snow'

function Ecosystem() {
  return (
    <div className="font-sofia">
      <SnowEffect />
      <Navbar />
      {/* <Bg  /> */}
      <Background />
      <div className='h-[7vh]'></div>
      <Utilities />
      <div className='h-[7vh]'></div>
      {/* <Audio /> */}
      <Footer />
    </div>
  );
}

export default Ecosystem;