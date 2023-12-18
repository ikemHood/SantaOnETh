
import background from "../assets/chr-bg.jpg"
import flower from "../assets/tree.png"
import bell from "../assets/bell.png"
import jingle1 from "../assets/01.png"
import jingle2 from "../assets/02.png"
import jingle3 from "../assets/03.png"
import ParallaxComponent from "./parallax"

export default function Background() {

  return (
    <>
      <div className="fixed h-full inset-0 overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          className="absolute inset-0 -z-10 bg-fixed"
        ></div>
        <img src={bell} alt="bell" />
        <div className="flex sm:ml-10 gap-1">
          <div className="animate-float" style={{ animationDelay: '0s' }}>
            <img src={jingle2} alt="jingle" className="filter w-11 flex invert brightness-150 contrast-200 top-[-150px]" />
          </div>
          <div className="animate-float2" style={{ animationDelay: '0s' }}>
            <img src={jingle1} alt="jingle" className="filter w-11 flex invert brightness-150 contrast-200 top-[-150px]" />
          </div>
          <div className="animate-float" style={{ animationDelay: '0s' }}>
            <img src={jingle3} alt="jingle" className="filter w-11 flex invert brightness-150 contrast-200 top-[-150px]" />
          </div>
          {/* <img src={jingle1} alt="jingle" className="filter invert brightness-150 contrast-200 top-[-80px]" />
          <img src={jingle3} alt="jingle" className="filter invert brightness-150 contrast-200 top-[-150px]" /> */}
        </div>
        <img src={flower} alt="flower"  className="top-[40%] sm:top-[50%] w-32 relative left-[67%] sm:left-[70%]"/>
      </div>
    </>
  )
}