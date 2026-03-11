"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { propsFadeInUp, propsFadeIn } from "@/lib/motionProps";
import { Work } from "@/types/work";

export function ImageDiv({work}: { work: Work }) {
  return (
    <motion.div className="lg:w-1/2 lg:pr-4 mb-8 lg:mb-0" {...propsFadeIn}>
      <Image
        src={work.src}
        alt={work.title}
        width={800}
        height={800}
        className="w-full h-auto rounded"
      />
    </motion.div>
  );
}

export function DescriptionDiv({work}: { work: Work }) {
  return (
    <motion.div className="lg:w-1/2 lg:pl-4" {...propsFadeInUp}>
      <h2 className="text-2xl font-bold mb-4">{work.title}</h2>
      <p>制作時期：{work.date}</p>
      <p>{work.description}</p>
    </motion.div>
  );
}
