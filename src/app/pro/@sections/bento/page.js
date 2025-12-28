import {
  roboto,
  tourney,
  silkscreen,
  courierPrime,
  poppins,
  kalam,
  gabarito,
} from "../../../../styles/fonts";
import Readme from "../../../../styles/readme";

export default function Page() {
  return (
    <div className="w-[85vw] h-[99vh] mt-[0%] pt-[7%] p-[1%]">
    <div className="inline-flex text-blue-50 my-[1%] pl-[1%] py-[2%] w-fit h-fit">
      <div className={`${gabarito.className} w-fit h-fit mr-[2%] border-r-4 pr-[3%] py-[3%]`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-squirrel-icon lucide-squirrel my-[-1%]"><path d="M15.236 22a3 3 0 0 0-2.2-5"/><path d="M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"/><path d="M18 13h.01"/><path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"/></svg>
        <div className="text-[5rem] whitespace-nowrap my-[-5%]">
        I am Heramb.
        </div>
        <div className={`text-[1.5rem] flex justify-between`}>
        <span>SWE / AIE</span>
        <span className="inline-flex items-center">Mumbai, India</span>
        </div>
      </div>
      <div>
      <Readme/>
      </div>
    </div>
    </div>
  );
}