import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--background)]/30 backdrop-blur-sm z-50 py-4 px-6 flex justify-between items-center text-sm shadow-sm">
      <div className="font-bold">西田明正（Akimasa NISHIDA）</div>
      <div className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <a href="https://blog.akimasanishida.com" target='_blank' className='hover:underline'>Blog</a>
      </div>
    </nav>
  );
}
