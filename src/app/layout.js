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
      <body>{children}</body>
    </html>
  );
}
