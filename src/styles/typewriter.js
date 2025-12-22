"use client";
import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  color = "text-emerald-50",
  font = "font-mono",
  size = "text-9xl",

  speed = 0.1,
  cursorDelay = 0,
  idleBlink = 1500,
  afterBlink = 750,
  pause = 10000,

  loop = true
}) {
  const [phase, setPhase] = useState("hidden");
  const [runId, setRunId] = useState(0); // used ONLY to restart CSS animation

  const duration = text.length * speed * 1000;

  useEffect(() => {
    let timers = [];

    const schedule = (fn, delay) => {
      const t = setTimeout(fn, delay);
      timers.push(t);
    };

    // Cursor appears
    schedule(() => setPhase("idle"), cursorDelay);

    // Start typing
    schedule(() => setPhase("typing"), cursorDelay + idleBlink);

    // Typing done
    schedule(() => setPhase("done"), cursorDelay + idleBlink + duration);

    // Hide cursor
    schedule(
      () => setPhase("hidden"),
      cursorDelay + idleBlink + duration + afterBlink
    );

    // Restart cycle
    if (loop) {
      schedule(() => {
        setRunId(id => id + 1);   // 🔁 restart animation safely
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
    loop
  ]);

  const cursorClass =
    phase === "idle"
      ? "cursor cursor-blink"
      : phase === "typing" || phase === "done"
      ? "cursor"
      : "";

  return (
    <h1
      className={`
        typewriter
        ${cursorClass}
        inline-block
        w-fit
        font-black
        ${size}
        ${color}
        ${font}
      `}
      style={{
        "--chars": text.length,
        "--duration": `${duration / 1000}s`,
        animationPlayState: phase === "typing" ? "running" : "paused"
      }}
      key={runId}   /* ✅ SAFE: only affects CSS animation */
    >
      {text}
    </h1>
  );
}
