"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className="label border border-paper/30 px-5 py-3 transition-colors hover:border-tally hover:text-tally"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setDone(true);
          setTimeout(() => setDone(false), 2000);
        } catch {
          /* clipboard unavailable: the mailto link above still works */
        }
      }}
    >
      <span aria-live="polite">{done ? "Copied ✓" : "Copy email"}</span>
    </button>
  );
}
