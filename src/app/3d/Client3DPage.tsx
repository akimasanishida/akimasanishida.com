"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Main, Header, Section } from "@/components";
import { works } from "@/data/works";

export default function Client3DPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <Main>
      <Header title="3D" subtitle="Blender で作成したものたち" />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-4">
          {works.map((img, i) => (
            <Link key={i} href={`/3d/${img.slug}`}>
              <div
                key={i}
                className="relative w-full bg-[var(--background-darker)] aspect-square rounded overflow-hidden shadow group"
                onMouseEnter={() => isDesktop && setHoveredIndex(i)}
                onMouseLeave={() => isDesktop && setHoveredIndex(null)}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className={`object-cover transition-all duration-500 ease-in-out ${
                    hoveredIndex === i ? "scale-98" : ""
                  }`}
                />

		{isDesktop && (
		  <>
                    <div
                      className={`absolute inset-0 bg-[var(--background-darker)] transition-opacity duration-500 ease-in-out ${
                        hoveredIndex === i ? "opacity-60" : "opacity-0"
                      }`}
                    />

                    <div
                      className={`absolute inset-0 flex text-xl items-center justify-center transition-opacity duration-500 ease-in-out ${
                        hoveredIndex === i ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {img.title}
                    </div>
		  </>
		)}
              </div>

	      <div className="mt-2 text-center text-sm lg:hidden">
		      {img.title}
	      </div>
            </Link>
          ))}
        </div>
      </Section>
    </Main>
  );
}
