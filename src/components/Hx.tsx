import { ReactNode } from "react";

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold mb-2">{children}</h2>
  );
}

export function H3({ key, children }: { key?: string; children: ReactNode }) {
  return (
    <h3 className="text-xl font-semibold mb-2" key={key}>{children}</h3>
  );
}
