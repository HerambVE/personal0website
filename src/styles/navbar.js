"use client";

import { usePathname, useRouter } from "next/navigation";
import { gabarito } from "../styles/fonts";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const isInformal =
    pathname === "/in" || pathname.startsWith("/in/");

  const toggleMode = () => {
    if (isInformal) {
      router.replace(pathname.replace("/in", "/pro"));
      console.log("atleast the button is clicked")
    } else {
      router.replace(pathname.replace("/pro", "/in"));
      console.log("atleast the button is clicked")
    }
  };

  return (
    <div className="bg-[#1717174a] backdrop-blur-xs inline-flex align-middle justify-between w-[98%] px-[4%] py-[0.5%] fixed">
      
      {/* Toggle button */}
      <button
        onClick={toggleMode}
        aria-label="Toggle mode"
        className="
          ml-5
          rounded-full p-2
          cursor-pointer
          bg-[#0d11171b]
          inline-flex items-center text-cyan-50
          z-10
        "
      >
        {isInformal ?  
        (
          /* Informal icon */
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.15">
            <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" />
            <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" />
            <path d="M5 21h14" />
          </svg>
        )
         : 
        (
          /* Professional icon */
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.15">
            <path d="M12 12h.01" />
            <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <path d="M22 13a18.15 18.15 0 0 1-20 0" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
          </svg>
        )
        }
      </button>

      {/* Nav links */}
      <nav className="w-auto justify-self-end text-cyan-50 text-[1.5rem] py-2">
        {isInformal ? (
          <div>
            <a className={`${gabarito.className} ml-5 nav-link`}>Gallery</a>
            <a className={`${gabarito.className} ml-5 nav-link`}>Blog</a>
            <a className={`${gabarito.className} ml-5 nav-link`}>Contact</a>
          </div>
          
        ) : (
          <div>
            <a className={`${gabarito.className} ml-5 nav-link`}>Welcome</a>
            <a className={`${gabarito.className} ml-5 nav-link`}>About Me</a>
            <a className={`${gabarito.className} ml-5 nav-link`}>Contact</a>
          </div>
        )}
      </nav>
    </div>
  );
}
