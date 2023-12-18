
import Sound from "react-sound";
import BullSound from "../assets/audio.mp3";
import { useState } from "react";
import { SlSocialTwitter } from "react-icons/sl";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

function Audio() {
  const [play, setPlay] = useState(true);
  const path = window.location.pathname;
  return (
    <div className="relative w-screen h-[20] z-50 flex">
      <div className={`top-[20vh] right-4 flex gap-4 absolute`}>
        <Sound
          url={BullSound}
          playStatus={play ? Sound.status.PLAYING : Sound.status.STOPPED}
          loop
          autoLoad
        />
        <div className="flex">
          <a href="https://twitter.com/SantaOnEth" target="_blank">
            <SlSocialTwitter className="text-white w-10 h-10 sm:w-14 sm:h-14 mr-2" />
          </a>
        </div>
        <div>
          {play ? (
            <HiSpeakerWave
              className="text-white w-12 h-12 sm:w-16 sm:h-16"
              onClick={() => setPlay(!play)}
            />
          ) : (
            <HiSpeakerXMark
              className="text-white w-12 h-12 sm:w-16 sm:h-16"
              onClick={() => setPlay(!play)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Audio;
