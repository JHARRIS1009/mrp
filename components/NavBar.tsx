import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="mb-8 flex gap-6 border-b border-slate-700 pb-4">
      <Link href="/">Home</Link>
      <Link href="/inventory">Inventory</Link>
      <Link href="/demand">Demand</Link>
      <Link href="/can-build">Can Build</Link>
      <Link href="/shortages">Shortages</Link>
      <Link href="/bom/">BOM</Link>
      <Link href="/purchase-orders/">Purchase Orders</Link>
      <Link href="/exceptions/">Exceptions</Link>
    </nav>
  );
}