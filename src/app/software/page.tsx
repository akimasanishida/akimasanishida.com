import { Main, Header, Section } from "@/components";
import { Content } from "./page-client";

export default function Page() {
  return (
    <Main>
      <Header title="ソフトウェア開発" subtitle="開発したソフトウェア" />

      <div className="my-4">
        <p>仕事以外で開発したソフトウェアを紹介します。</p>
      </div>

      <Section>
        <Content />
      </Section>
    </Main>
  );
}
