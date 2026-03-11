import { notFound } from "next/navigation";
import { works } from "@/data/works";
import { Main, Header, Section } from "@/components";
import { DescriptionDiv, ImageDiv } from "./page-client";

const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);

  if (!work) return;

  return {
    title: work.title,
    description: "3D作品の詳細",
  };
};

const WorkDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);

  if (!work) return notFound();

  return (
    <Main>
      <Header title={work.title} subtitle="作品の詳細" />

      <Section>
        <div className="lg:flex">
          <ImageDiv work={work} />
          <DescriptionDiv work={work} />
        </div>
      </Section>
    </Main>
  );
};

export async function generateStaticParams() {
  return works.map((w) => ({
    slug: w.slug,
  }));
}

export default WorkDetailPage;
export { generateMetadata };
