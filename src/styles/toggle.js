"use client";

import { useRouter, usePathname } from "next/navigation";

export default function ModeToggle() {
  const router = useRouter();
  const pathname = usePathname();

  // handle nested routes correctly
  const isInformal = pathname.startsWith("/in");

const toggleMode = () => {
  if (pathname.startsWith("/in")) {
    router.replace(pathname.replace(/^\/in/, "/pro"));
  } else if (pathname.startsWith("/pro")) {
    router.replace(pathname.replace(/^\/pro/, "/in"));
  }
};

  return (
    <button
      onClick={toggleMode}
      aria-label="Toggle mode"
      className="
        rounded-full p-2
        cursor-pointer
        bg-[#0d11171b]
        inline-flex items-center text-cyan-50
        focus:outline-none
        focus-visible:ring-2 focus-visible:ring-brand-soft
      "
    >
      {isInformal ? (
        // Informal icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" />
          <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" />
          <path d="M5 21h14" />
        </svg>
      ) : (
        // Professional icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 12h.01" />
          <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M22 13a18.15 18.15 0 0 1-20 0" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
      )}
    </button>
  );
}