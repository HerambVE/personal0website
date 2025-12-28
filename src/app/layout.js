import {
  roboto,
  tourney,
  silkscreen,
  courierPrime,
  poppins,
  gabarito
} from "../styles/fonts";
import Landing from "../styles/toggle";
import "./globals.css";
import {Github , Linkedin , Resume, Twitter} from "../styles/icon"

export const metadata = {
  title: "Heramb Vengurlekar - Portfolio Website",
  description:
    "Heramb Vengurlekar is a Software Developer from Mumbai. Passionate about Low Level Programming, Artificial Intelligence and Art/Photography.",

  openGraph: {
    title: "Heramb Vengurlekar - Portfolio Website",
    description:
      "Software Developer from Mumbai. Passionate about Low Level Programming, AI and Art/Photography.",
    url: "https://your-domain.com",
    siteName: "Heramb Vengurlekar",
    images: [
      {
        url: "https://your-domain.com/og.png",
        width: 1200,
        height: 630,
        alt: "Heramb Vengurlekar Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Heramb Vengurlekar - Portfolio Website",
    description:
      "Software Developer from Mumbai. Passionate about Low Level Programming, AI and Art/Photography.",
    images: ["https://your-domain.com/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`
        ${roboto.className}
        ${tourney.className}
        ${silkscreen.className}
        ${courierPrime.className}
      `}
    >
      <body className="px-[1.5%]">
      <div className='inline-flex justify-between w-[98%] h-fit px-[7.5%] py-[1%] fixed place-self-start'>
                  <div className={`${gabarito.className} font-black text-cyan-50 text-5xl`}><Landing/></div>
                  <nav className='w-auto justify-self-end'>
                      <a className={`${gabarito.className} border-b-2 border-cyan-50 text-cyan-50 text-[3vh] ml-[4.5vw] py-[2%]`} href="">Welcome</a>
                      <a className={`${gabarito.className} border-b-2 border-cyan-50 text-cyan-50 text-[3vh] ml-[4.5vw] py-[2%]`} href="">About Me</a>
                      <a className={`${gabarito.className} border-b-2 border-cyan-50 text-cyan-50 text-[3vh] ml-[4.5vw] py-[2%]`} href="">Blog</a>
                  </nav>
              </div>
      {children}
      <footer className={`${poppins.className} flex justify-between py-[1.3%] text-cyan-50 h-fit px-[7.5%]`}>
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
          <a href="">
          <Resume/>
          </a>
        </div>
        <div className="text-[1.2rem]">
        30-12-2025 | @HerambVE
        </div>
      </footer>
      </body>
      
    </html>
  );
}
