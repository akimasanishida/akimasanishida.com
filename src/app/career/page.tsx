import { Metadata } from "next";
import { Main, Header, Section } from "@/components";
import {
  BiographySection,
  GradSection,
  HighschoolSection,
  UndergradSection,
} from "./page-client";

export const metadata: Metadata = {
  title: "経歴",
  description: "これまでにやってきたこと・やっていること",
};

export default function Career() {
  return (
    <Main>
      <Header
        title="経歴"
        subtitle="これまでにやってきたこと・やっていること"
      />

      <Section id="biography">
        <BiographySection />
      </Section>

      <Section id="grad">
        <GradSection />
      </Section>

      <Section id="undergrad">
        <UndergradSection />
      </Section>

      <Section id="highschool">
        <HighschoolSection />
      </Section>
    </Main>
  );
}
