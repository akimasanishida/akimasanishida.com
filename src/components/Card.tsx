import Link from "next/link";

const hoverTextClass =
  "transition-colors duration-300 group-hover:text-background";

export default function Card({
  title,
  description,
  href,
}: {
  title: string;
  description: string | null;
  href: string;
}) {
  return (
    <div className="relative group overflow-hidden rounded-sm border text-center">
      <Link
        href={href}
        className="relative z-10 flex min-h-20 md:min-h-40 flex-col items-center justify-center"
      >
        <div className="absolute inset-0 -z-10 origin-left scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100" />
        <h3 className={`text-2xl font-bold ${hoverTextClass}`}>{title}</h3>
        {description && (
          <p className={`mt-2 text-sm ${hoverTextClass}`}>{description}</p>
        )}
      </Link>
    </div>
  );
}
