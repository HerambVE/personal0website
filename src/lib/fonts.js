import {
  Roboto,
  Tourney,
  Silkscreen,
  Courier_Prime,
} from "next/font/google";

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
