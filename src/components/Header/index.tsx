import Image from "next/image";
import { AnimatedComponent } from "./client";
import { HeaderProps } from "@/types/header";

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <section className="relative h-[30vh] mb-8">
      <Image
        src="/full.webp"
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center w-full">
        <AnimatedComponent title={title} subtitle={subtitle} />
      </div>
    </section>
  );
}
