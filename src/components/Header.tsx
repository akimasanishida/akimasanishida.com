import { ReactNode } from 'react';

interface HeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
}

export default function Header({ title, subtitle }: HeaderProps ) {
  return (
    <section className="relative bg-[url('/full.webp')] bg-cover bg-center h-[30vh] mb-8">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <div className="w-full">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-6 drop-shadow-xl/50">{title}</h1>
          {subtitle && (<p className="mb-6 drop-shadow-xl/50">{subtitle}</p>)}
        </div>
      </div>
    </section>
  );
}
