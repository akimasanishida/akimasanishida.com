import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--background)]/30 backdrop-blur-sm z-50 py-4 px-6 flex justify-between items-center text-sm shadow-sm">
      <div className="font-bold">
        <Link href="/">
          西田明正（Akimasa NISHIDA）
        </Link>
      </div>
    </nav>
  );
}
