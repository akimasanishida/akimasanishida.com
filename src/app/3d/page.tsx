import Link from "next/link";
import { Main, Header, Section } from "@/components";
import { works } from "@/data/works";
import { WorkList } from "./page-client";

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
