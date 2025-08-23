import { ReactNode } from 'react';

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-12 pt-14 pb-2">
      {children}
    </main>
  );
}
