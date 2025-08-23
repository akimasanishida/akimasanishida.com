import TagProps from "./TagProps";

export default function Section({ id, className, children }: TagProps) {
  return (
    <section id={id} className={`mb-8 ${className}`}>
      {children}
    </section>
  );
}
