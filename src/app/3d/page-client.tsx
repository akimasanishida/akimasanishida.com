"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import FadeInComponents from "@/components/FadeInComponents";
import useIsDesktop from "@/lib/isDesktop";

interface WorkCardProps {
  slug: string;
  src: string;
  title: string;
}

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
  img: WorkCardProps;
  isDesktop: boolean;
}) {
  const WrapImage = () => (
    <Image src={img.src} alt={img.title} fill className="object-cover" />
  );

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
            <WrapImage />
          </motion.div>
        ) : (
          <div className="absolute inset-0">
            <WrapImage />
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

export function WorkList({ works }: { works: WorkCardProps[] }) {
  const isDesktop = useIsDesktop();
  return (
    <>
      {isDesktop === false && <div className="mb-4"><p>※ 画像をタップすると詳細をご覧になれます。</p></div>}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-4">
        {works.map((img, i) => (
          <FadeInComponents key={i}>
            <Link href={`/3d/${img.slug}`}>
              <WorkCard img={img} isDesktop={isDesktop} />
            </Link>
          </FadeInComponents>
        ))}
      </div>
    </>
  );
}
