"use client";

import Image from "next/image";
import { H2 } from "@/components";
import PageCard from "@/components/PageCard";
import SocialIcons from "@/components/SocialIcons";
import { propsFadeInUp } from "@/lib/motionProps";
import { motion } from "motion/react";

export function ProfileSection() {
  return (
    <motion.div {...propsFadeInUp}>
      <H2>自己紹介</H2>

      <div className="flex flex-col md:flex-row gap-4">
        <Image
          src="/profile.jpg"
          width={768}
          height={768}
          alt="プロフィールイラスト"
          className="w-full md:w-1/3 flex-shrink-0 rounded-lg"
        />
        <div>
          <ul className="pretty-list">
            <li>名前：西田 明正（Akimasa NISHIDA）</li>
            <li>仕事：ソフトウェア・エンジニア</li>
            <li>大学：天文学、物理学</li>
            <li>
              趣味：クラシック音楽鑑賞（Mahler, Brahms, Tchaikovsky,{" "}
              Rachmaninoff...）、3Dモデリング、散歩
            </li>
          </ul>
          <div className="ml-6 mt-4">
            <p>
              アイコン by{" "}
              <a
                href="https://x.com/hosisuzumi"
                target="_blank"
                className="underline"
                rel="noopener noreferrer"
              >
                @hosisuzumi
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PagesSection() {
  return (
    <motion.div {...propsFadeInUp}>
      <H2>ページ</H2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
        <PageCard
          title="ソフトウェア開発"
          description="業務以外で開発したソフトウェア"
          href="/software"
        />
        <PageCard
          title="経歴"
          description="これまでにやってきたこと・やっていること"
          href="/career"
        />
        <PageCard
          title="3Dイラスト"
          description="3Dソフトウェアで作成した作品のギャラリー"
          href="/3d"
        />
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <motion.div {...propsFadeInUp}>
      <H2>このサイトについて</H2>
      <ul className="pretty-list">
        <li>
          <a
            href="https://github.com/Font-Kai/Kaisei-Opti"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            解星オプティ
          </a>{" "}
          フォントを使用しています（SIL Open Font License 1.1）
        </li>
        <li>ヘッダー画像は GPT-4o による生成画像を使用しています。</li>
        <li>
          GitHub レポジトリは{" "}
          <a
            href="https://github.com/akimasanishida/akimasanishida.com"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            こちら
          </a>
        </li>
      </ul>
    </motion.div>
  );
}

export function ContactSection() {
  return (
    <motion.div {...propsFadeInUp}>
      <H2>連絡先・リンク</H2>

      <SocialIcons />
    </motion.div>
  );
}
