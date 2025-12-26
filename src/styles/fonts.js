import {
  Roboto,
  Tourney,
  Silkscreen,
  Courier_Prime,
  Akshar,
  Sarala,
  Anek_Devanagari,
  Poppins,
  Kalam,
  Gabarito
} from "next/font/google";

/* =========================
   Existing fonts
   ========================= */

export const gabarito = Gabarito({
  subset:["latin"],
  weight: ["400","500","600","700","800","900"],
  display:"swap",
});
export const roboto = Roboto({
  subsets: ["latin", "devanagari"],
  weight: ["400", "700"],
  display: "swap",
});

export const tourney = Tourney({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const courierPrime = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

/* =========================
   Additional fonts
   ========================= */

export const akshar = Akshar({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const sarala = Sarala({
  subsets: ["devanagari", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const anekDevanagari = Anek_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});