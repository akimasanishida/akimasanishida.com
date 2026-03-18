import Main from "@/components/Main";
import Header from "@/components/Header";
import Section from "@/components/Section";
import { AboutSection, ContactSection, PagesSection, ProfileSection } from "./page-client";

export default function Home() {
  return (
    <Main>
      <Header title="西田 明正（Akimasa NISHIDA）" subtitle="地球人です" />

      <Section id="profile">
        <ProfileSection />
      </Section>

      <Section id="pages">
        <PagesSection />
      </Section>

      <Section id="about">
        <AboutSection />
      </Section>

      <Section id="contact">
        <ContactSection />
      </Section>
    </Main>
  );
}
