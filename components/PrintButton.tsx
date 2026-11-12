"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="label tap inline-flex border border-ink/40 px-4 hover:border-ink"
    >
      Print
    </button>
  );
}
