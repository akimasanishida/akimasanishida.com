"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { propsFadeInUp, propsFadeIn } from "@/lib/motionProps";
import isDesktop from "@/lib/isDesktop";
import { Work } from "@/types/work";

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1 },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
};

const overlayVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 0.4 },
};

const titleVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
};

export function WorkCard({
  img,
  isDesktop,
}: {
  img: Work;
  isDesktop: boolean;
}) {
  return (
    <motion.div
      whileHover="hover"
      variants={cardVariants}
      initial="rest"
      animate="rest"
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full aspect-square rounded overflow-hidden shadow group">
        {isDesktop ? (
          <motion.div
            variants={imageVariants}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image src={img.src} alt={img.title} fill className="object-cover" />
          </motion.div>
        ) : (
          <div className="absolute inset-0">
            <Image src={img.src} alt={img.title} fill className="object-cover" />
          </div>
        )}

        {isDesktop && (
          <>
            <motion.div
              className="absolute inset-0 bg-[var(--background-darker)]"
              variants={overlayVariants}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              className="absolute inset-0 flex text-xl items-center justify-center text-shadow-lg"
              variants={titleVariants}
              transition={{ duration: 0.5 }}
            >
              {img.title}
            </motion.div>
          </>
        )}
      </div>
      {isDesktop === false && (
        <div className="mt-2 text-center">{img.title}</div>
      )}
    </motion.div>
  );
}

export function WorkList({ works }: { works: Work[] }) {
  const flagIsDesktop = isDesktop();
  return (
    <>
      {flagIsDesktop === false && <motion.div className="mb-4" {...propsFadeIn}><p>※ 画像をタップすると詳細をご覧になれます。</p></motion.div>}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-4">
        {works.map((img, i) => (
          <motion.div key={i} {...propsFadeInUp}>
            <Link href={`/3d/${img.slug}`}>
              <WorkCard img={img} isDesktop={flagIsDesktop} />
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}
