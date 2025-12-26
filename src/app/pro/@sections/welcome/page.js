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
      <div className="flex min-h-screen w-full flex-col items-center justify-between px-12 sm:items-start backdrop-blur-[0.01em]"> 
        <div className="relative flex w-full h-full items-center pt-[3%]">
        <div className='inline-flex justify-between items-center w-[93%] h-fit mt-[-2%] py-[1%] fixed place-self-start'>
            <p className={`${tourney.className} font-black text-emerald-50 text-5xl`}>hVE</p>
            <nav className='w-auto justify-self-end'>
                <a className={`${gabarito.className} border-b-2 border-emerald-50 text-emerald-50 text-[3vh] ml-[4.5vw] py-[2%]`} href="">Welcome</a>
                <a className={`${gabarito.className} border-b-2 border-emerald-50 text-emerald-50 text-[3vh] ml-[4.5vw] py-[2%]`} href="">About Me</a>
                <a className={`${gabarito.className} border-b-2 border-emerald-50 text-emerald-50 text-[3vh] ml-[4.5vw] py-[2%]`} href="">Blog</a>
            </nav>
        </div>
        <div className="w-[50%] relative overflow-y-clip">
        <img src="/flower-Photoroom-1.png" alt="Greetings" className="fixed top-[5vh] left-[2%] z-[-10] w-[55%] h-auto"/>
        </div>
        <div className="flex justify-end w-[50%] h-full">
            <div className='flex-col-reverse w-fit h-fit text-right justify-items-end pr-0 pb-[2%] mt-[16%]'>
            <Typewriter size='text-[8vw]' font='poppins' idleBlink={1150} pause={7000} loop={false} afterBlink={700} text="Hello,"/>
            <br />
            <Typewriter color='text-amber-200' font='poppins' size='text-[10vw]' cursorDelay={2500} idleBlink={500} pause={7000} loop={false} afterBlink={750} text="नमस्ते!"/>
            </div>
        </div>
        <div className="absolute bottom-[-28%] right-[20%] z-10">
        <Caret />
        </div>
        </div>
      </div>
  );
}
