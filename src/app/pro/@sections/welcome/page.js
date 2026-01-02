import Typewriter from '../../../../styles/typewriter';
import Caret from '../../../../styles/caret';
import {
  roboto,
  tourney,
  silkscreen,
  courierPrime,
  poppins,
  kalam,
  gabarito
} from "../../../../styles/fonts";
import "../../../globals.css"
export default function Home() {
  return (
      <div className="flex h-[99vh] w-full flex-col items-center justify-between px-[5%] relative z-[-1] sm:items-start backdrop-blur-[0.01em]"> 
        <div className="relative flex w-full h-full items-center pt-[3%]">
          <div className="w-[50%] relative overflow-y-clip">
            <img src="/flower-Photoroom-1.png" alt="Greetings" className="fixed top-[6vh] left-[2%] z-[-10] w-[55%] h-auto"/>
          </div>
          <div className="flex justify-end w-[50%] h-full">
            <div className='flex-col-reverse w-fit h-fit text-right justify-items-end pr-0 pb-[2%] mt-[16%]'>
              <Typewriter size='text-[8vw]' font='poppins' idleBlink={1150} pause={7000} loop={false} afterBlink={700} text="Hello,"/>
              <br />
              <Typewriter color='text-amber-200' font='poppins' size='text-[10vw]' cursorDelay={2500} idleBlink={500} pause={7000} loop={false} afterBlink={750} text="नमस्ते!"/>
            </div>
          </div>
            <div className="absolute bottom-[0%] right-[20%] z-10">
              <Caret />
            </div>
        </div>
      </div>
  );
}
