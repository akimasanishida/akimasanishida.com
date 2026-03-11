"use client";

import { motion } from "motion/react";
import { HeaderProps } from "@/types/header";

export function AnimatedComponent({ title, subtitle }: HeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-6 drop-shadow-xl/50">
        {title}
      </h1>
      {subtitle && <p className="mb-6 drop-shadow-xl/50">{subtitle}</p>}
    </motion.div>
  );
}
