"use client";
import { useEffect, useState } from "react";
import {
  roboto,
  tourney,
  silkscreen,
  courierPrime,
  poppins,
  kalam,
  gabarito
} from "./fonts";

/**
 * Fonts that REQUIRE `.className`
 * (non-system, loaded via next/font)
 */
const FONT_CLASS_MAP = {
  roboto: roboto.className,
  tourney: tourney.className,
  silkscreen: silkscreen.className,
  courier: courierPrime.className,
  poppins: poppins.className,
  kalam: kalam.className,
};

export default function Typewriter({
  text,
  color = "text-emerald-50",
  font = "font-mono", // can be "kalam", "tourney", OR "font-mono"
  size = "text-9xl",

  speed = 0.1,
  cursorDelay = 0,
  idleBlink = 1500,
  afterBlink = 750,
  pause = 10000,

  loop = true,
}) {
  const [phase, setPhase] = useState("hidden");
  const [runId, setRunId] = useState(0);

  const duration = text.length * speed * 1000;

  useEffect(() => {
    const timers = [];

    const schedule = (fn, delay) => {
      const t = setTimeout(fn, delay);
      timers.push(t);
    };

    schedule(() => setPhase("idle"), cursorDelay);
    schedule(() => setPhase("typing"), cursorDelay + idleBlink);
    schedule(() => setPhase("done"), cursorDelay + idleBlink + duration);
    schedule(
      () => setPhase("hidden"),
      cursorDelay + idleBlink + duration + afterBlink
    );

    if (loop) {
      schedule(() => {
        setRunId((id) => id + 1);
        setPhase("hidden");
      }, cursorDelay + idleBlink + duration + afterBlink + pause);
    }

    return () => timers.forEach(clearTimeout);
  }, [
    runId,
    text,
    speed,
    cursorDelay,
    idleBlink,
    afterBlink,
    pause,
    loop,
  ]);

  /* Cursor behavior */
  const cursorClass =
    phase === "idle"
      ? "cursor cursor-blink"
      : phase === "typing" || phase === "done"
      ? "cursor"
      : "";

  /* 🔑 Font resolution logic */
  const resolvedFontClass =
    FONT_CLASS_MAP[font] ?? font; // use .className if known, else raw class

  return (
    <h1
      key={runId}
      className={`
        typewriter
        ${cursorClass}
        inline-block
        w-fit
        ${size}
        ${color}
        ${resolvedFontClass}
      `}
      style={{
        "--chars": text.length,
        "--duration": `${duration / 1000}s`,
        animationPlayState: phase === "typing" ? "running" : "paused",
      }}
    >
      {text}
    </h1>
  );
}
