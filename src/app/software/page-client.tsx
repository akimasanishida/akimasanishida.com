"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { propsFadeIn, propsFadeInToLeft } from "@/lib/motionProps";
import { software } from "@/data/software";
import { LinkProps } from "@/types/link";
import { SoftProps } from "@/types/software";

const figureBaseDir = "/software/";

export function Content() {
  return (
    <div className="flex flex-col gap-6">
      {software.map((soft, i) => (
        <Card key={i} {...soft} />
      ))}
    </div>
  );
}

function Card({ title, image, description, links }: SoftProps) {
  return (
    <div className="relative w-full h-[60vh] md:h-[50vh]">
      <motion.div {...propsFadeIn}>
        <Image
          src={`${figureBaseDir}${image.src}`}
          alt={image.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/85" />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center"
        {...propsFadeInToLeft}
      >
        <div className="m-4 md:m-16 text-shadow-lg">
          <h2 className="text-3xl font-bold">{title}</h2>
          <div className="mt-4">{description}</div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {links.map((link, i) => (
              <LinkBox key={i} href={link.href} title={link.title} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function LinkBox({ href, title }: LinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-block overflow-hidden border text-center bg-(--background-darker) px-6 py-2"
    >
      <div className="absolute inset-0 z-0 origin-left scale-x-0 bg-foreground transition-transform duration-300 ease-out group-hover:scale-x-100" />
      <div className="relative z-10 text-lg transition-colors duration-300 group-hover:text-background">
        {title}
      </div>
    </a>
  );
}
