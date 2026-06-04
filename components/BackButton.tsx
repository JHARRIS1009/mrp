"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="text-sm text-slate-300 hover:text-white"
    >
      ← Back
    </button>
  );
}