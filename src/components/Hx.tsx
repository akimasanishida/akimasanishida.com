import TagProps from "./TagProps";

export function H2({ children }: TagProps) {
  return (
    <h2 className="text-2xl font-semibold mb-2">{children}</h2>
  );
}

export function H3({ key, children }:TagProps) {
  return (
    <h3 className="text-xl font-semibold mb-2" key={key}>{children}</h3>
  );
}
