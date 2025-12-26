"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main style={{ padding: "4rem"}}>
      <h1>Choose Mode</h1>

      <button
        onClick={() => router.push("/pro")}
        style={{ marginRight: "1rem" }}
      >
        Professional
      </button>

      <button onClick={() => router.push("/in")}>
        Informal
      </button>
    </main>
  );
}
