import { ensureDataBeforePage } from "@/lib/sync/ensure-data-before-page";
import Link from "next/link";

export const dynamic = "force-dynamic";

const links = [
  { href: "/inventory", label: "Inventory" },
  { href: "/can-build", label: "Can Build" },
  { href: "/shortages", label: "Shortages" },
  { href: "/demand", label: "Demand" },
];



export default function HomePage() {
  ensureDataBeforePage();
  
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="text-3xl font-bold">MiniTrencher MRP</h1>
      <p className="mt-2 text-slate-300">
        Inventory planning, BOM explosion, shortages, and build capacity.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-xl border border-slate-700 bg-slate-900 p-6 hover:bg-slate-800"
          >
            <h2 className="text-xl font-semibold">{link.label}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
