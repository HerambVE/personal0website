import "./globals.css";
import {
  roboto,
  tourney,
  silkscreen,
  courierPrime,
} from "../lib/fonts";

export const metadata = {
  title: "Heramb Vengurlekar - Portfolio Website",
  description:
    "Heramb Vengurlekar is a Software Developer from Mumbai. Passionate about Low Level Programming, Artificial Intelligence and Art/Photography.",
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
      <body>
        {children}
      </body>
    </html>
  );
}
