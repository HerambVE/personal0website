import "../app/globals.css";
import {
  roboto,
  tourney,
  silkscreen,
  courierPrime,
  poppins,
  gabarito
} from "./fonts";
import {Github , Linkedin , Resume, Twitter} from "./icon";

export default function Footer(){
    return(
        <footer className={`${poppins.className} flex justify-between py-[1.3%] text-cyan-50 h-fit px-[6.5%]`}>
        <div className="inline-flex space-x-6">
          <a href="https://github.com/HerambVE">
          <Github/>
          </a>
          <a href="https://x.com/HerambVE">
          <Twitter/>
          </a>
          <a href="https://www.linkedin.com/in/herambve/">
          <Linkedin/>
          </a>
        </div>
        <div className="text-[1.2rem]">
        HerambVE | 2026
        </div>
        </footer>
    )
};