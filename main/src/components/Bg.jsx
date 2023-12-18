
import backgroundGif from "../assets/santa.gif"
import layer1 from "../assets/layers/layer1.png"
import layer2 from "../assets/layers/layer2.png"
import layer3 from "../assets/layers/layer3.png"
import layer4 from "../assets/layers/layer4.png"
import layer5 from "../assets/layers/layer5.png"
import ParallaxComponent from "./parallax"

export default function Bg() {
  
  return (
    <>
    <div className="fixed inset-0 overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${backgroundGif})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="absolute inset-0 -z-10 bg-fixed"
      ></div>

      <ParallaxComponent>
        <img src={layer5} alt="layer5" className="w-screen h-full object-cover" />
        <img src={layer4} alt="layer4" className="w-screen h-full object-cover"/>
        <img src={layer3} alt="layer3" className="w-screen h-full object-cover" />
        <img src={layer2} alt="layer2" className="w-screen h-full object-cover" />
        <img src={layer1} alt="layer1" className="w-screen h-full object-cover" />
      </ParallaxComponent>

    </div>
    </>
  )
}