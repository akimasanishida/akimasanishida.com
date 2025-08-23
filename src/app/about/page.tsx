import { Metadata } from "next";
import { Main, Header, Section, H2 } from "@/components";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "このサイトについて",
};

export default function About() {
  return (
    <Main>
      <Header title="About" subtitle="このサイトについて" />

      <Section id="about">
        <H2>このサイトについて</H2>
        <p>
          このサイトは、西田明正（Akimasa NISHIDA）のポートフォリオです。
          Next.js に馴れようと思い作っています。
        </p>
      </Section>

      <Section id="background-image">
        <H2>コンセプト</H2>
        <p>
          少し古い時代のものとAIなどの新しい技術が好きです。ただの素人ですが、古典的な世界観を現代的に洗練された雰囲気で表現するサイトを作っていこうと考えています。
        </p>
        <p>
          サイトの中身については、所有しているスキルや現在の活動、考えていることなどを載せていく予定です。
        </p>

        <figure className="my-6 text-center">
          <Image
            src="/full.webp"
            alt="背景画像"
            width={600}
            height={400}
            className="rounded mx-auto my-2"
          />
          <figcaption className="mt-2">
            コンセプト画像：ChatGPT-4o で生成した「星月夜風の都市風景画」
          </figcaption>
        </figure>
        <p>
          ゴッホの《星月夜》をもとに、ChatGPT-4o
          に現代の都市風景にアレンジしてもらいました。
          本サイトのヘッダの背景画像などに使用されています。
        </p>
      </Section>

      <Section id="dependencies">
        <H2>使用しているもの</H2>
        本サイトは
        <ul className="pretty-list">
          <li>
            <a href="https://nextjs.org/" className="underline" target="_blank">
              Next.js
            </a>{" "}
            ベースです
          </li>
          <li>
            <a
              href="https://github.com/Font-Kai/Kaisei-Opti"
              className="underline"
              target="_blank"
            >
              解星オプティ
            </a>{" "}
            フォントを使用しています（SIL Open Font License 1.1）
          </li>
        </ul>
      </Section>
    </Main>
  );
}
