import Typewriter from '../styles/typewriter';
import {
  roboto,
  tourney,
  silkscreen,
  courierPrime,
} from "../lib/fonts";
export default function Intro(){
    return(
        <div className="flex w-full h-full items-center pt-[3%]">
        <div className='inline-flex justify-between items-center w-[93%] h-fit mt-[-2%] py-[1%] fixed place-self-start'>
            <p className={`${tourney.className} font-black text-emerald-50 text-5xl`}>hVE</p>
            <nav className='w-auto justify-self-end'>
                <a className={`${roboto.className} border-b-2 border-emerald-50 text-emerald-50 text-2xl font-black ml-18 py-[2%]`} href="">Welcome</a>
                <a className={`${roboto.className} border-b-2 border-emerald-50 text-emerald-50 text-2xl font-black ml-18 py-[2%]`} href="">About Me</a>
                <a className={`${roboto.className} border-b-2 border-emerald-50 text-emerald-50 text-2xl font-black ml-18 py-[2%]`} href="">Blog</a>
            </nav>
        </div>
        <div className="w-1/2 h-fit relative overflow-hidden">
        <img src="/trial.png" alt="Greetings" className="fixed top-[6%] left-[0%] z-[-10] w-[60%] h-auto"/>
        </div>
        <div className="flex justify-end w-1/2 h-[100%]">
            <div className='flex-col-reverse text-right justify-items-end my-[25%] ml-[5%]'>
            <Typewriter idleBlink={1150} pause={7000} loop={false} afterBlink={700} text="Hello,"/>
            <br />
            <Typewriter color='text-amber-200' cursorDelay={2500} idleBlink={500} pause={7000} loop={false} afterBlink={750} text="नमस्ते!"/>
            </div>
        </div>
        </div>
    )
}
// bg-[rgba(250,250,250,0.20)]