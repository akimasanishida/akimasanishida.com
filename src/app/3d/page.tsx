import { Metadata } from "next";
import Main from "@/components/Main";
import Header from "@/components/Header";
import Section from "@/components/Section";
import { works } from "@/data/works";
import { WorkList } from "./page-client";

export const metadata: Metadata = {
  title: "3D",
  description: "3Dソフトウェア Blender で作成したイラストを紹介します。",
};

export default function Page() {
  return (
    <Main>
      <Header title="3D" subtitle="Blender で作成したものたち" />

      <Section>
        <WorkList works={works} />
      </Section>
    </Main>
  );
}
