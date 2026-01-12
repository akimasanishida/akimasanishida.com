"use client";
import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import {
  GithubLogo,
  EnvelopeSimple,
  XLogo,
  Pen,
  ArrowBendDownRight,
} from "@phosphor-icons/react";
import { Main, Header, H2, Section } from "@/components";

export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [visibleKey, setVisibleKey] = useState<string | null>(null);
  const [opacityVisible, setOpacityVisible] = useState(false);

  useEffect(() => {
    if (hovered) {
      setVisibleKey(hovered);
      // 次の描画フレームで opacity を変更（アニメーションを発火させる）
      requestAnimationFrame(() => {
        setOpacityVisible(true);
      });
    } else {
      setOpacityVisible(false); // opacity を 0 に
      const timeout = setTimeout(() => setVisibleKey(null), 70);
      return () => clearTimeout(timeout);
    }
  }, [hovered]);

  const links: Record<string, string> = {
    mail: "mailto:akimasa@akimasanishida.com",
    x: "https://x.com/akimasa_nishida",
    github: "https://github.com/akimasanishida",
    blog: "https://blog.akimasanishida.com",
  };

  const icons: Record<string, ReactNode> = {
    mail: <EnvelopeSimple className="w-6 h-6 hover:opacity-70 transition" />,
    x: <XLogo className="w-6 h-6 hover:opacity-70 transition" />,
    github: <GithubLogo className="w-6 h-6 hover:opacity-70 transition" />,
    blog: <Pen className="w-6 h-6 hover:opacity-70 transition" />,
  };

  const descriptions: Record<string, string> = {
    mail: "メール",
    x: "X（旧 Twitter）",
    github: "GitHub",
    blog: "他愛もないブログ",
  };

  return (
    <Main>
      <Header title="西田 明正（Akimasa NISHIDA）" subtitle="地球人です" />

      <Section id="now">
        <H2>いまなにしてる？</H2>
        <ul className="pretty-list">
          <li>天文学の研究をしています</li>
          <li>（まもなく）ソフトウェア開発の仕事をします</li>
        </ul>
      </Section>

      <Section id="career">
        <H2>経歴</H2>
        <div className="mx-2">
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row">
              <div className="w-40 subtle-text">2026.4 –</div>
              <div>ソフトウェアエンジニア（予定）</div>
            </div>            
            <div className="flex flex-col sm:flex-row">
              <div className="w-40 subtle-text">2024.4 – 2026.3</div>
              <div>東京大学大学院 理学系研究科 天文学専攻</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-40 subtle-text">2022.4 – 2024.3</div>
              <div>東京大学 理学部 物理学科</div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-40 subtle-text">2020.4 – 2022.3</div>
              <div>東京大学 理科一類</div>
            </div>
          </div>

          <p className="mt-4">
            <Link
              href="/career"
              className="underline inline-flex items-center gap-1"
              aria-label="経歴の詳細はこちら"
            >
              <ArrowBendDownRight className="w-4 h-4" />
              詳細はこちら
            </Link>
          </p>
        </div>
      </Section>

      <Section id="interests">
        <H2>趣味・関心</H2>
        <ul className="pretty-list">
          <li>クラシック音楽鑑賞（Mahler, Brahms, Tchaikovsky, Rachmaninoff...）</li>
          <li>
            <Link
              href="/3d"
              className="underline"
              aria-label="3Dモデリングの詳細ページ"
            >
              3Dモデリング（Blender）
            </Link>
          </li>
          <li>ソフトウェア開発</li>
          <li>散歩</li>
        </ul>
      </Section>

      <Section id="contact">
        <H2>連絡先・リンク</H2>
        <div className="grid grid-cols-2 sm:flex flex-wrap items-center gap-8 mt-8">
          {["mail", "x", "github", "blog"].map((key) => (
            <div
              key={key}
              className="flex flex-col items-center sm:items-start"
            >
              <a
                href={links[key]}
                aria-label={descriptions[key]}
                target="_blank"
                onMouseEnter={() => setHovered(key)}
                onMouseLeave={() => setHovered(null)}
              >
                {icons[key]}
              </a>
              <span className="mt-1 text-xs sm:hidden">
                {descriptions[key]}
              </span>
            </div>
          ))}
        </div>

        <div className="h-8 mt-4 text-sm hidden sm:block">
          説明：
          {visibleKey && (
            <span
              className={`ml-2 transition-opacity duration-300 ${
                opacityVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {descriptions[visibleKey]}
            </span>
          )}
        </div>
      </Section>
    </Main>
  );
}
