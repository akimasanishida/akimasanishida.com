'use client';
import { motion } from "motion/react";
import TagProps from "./TagProps";

export default function Section({ id, className, children }: TagProps) {
  return (
    <section id={id} className={`mb-8 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
