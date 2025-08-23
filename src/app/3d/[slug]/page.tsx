import { notFound } from "next/navigation";
import { works } from "@/data/works";
import Image from "next/image";
import { Main, Header, Section } from "@/components";

const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  
  if (!work) return;

  return {
    title: work.title,
    description: "3D作品の詳細",
  };
}

const WorkDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);

  if (!work) return notFound();

  return (
    <Main>
      <Header title={work.title} subtitle="作品の詳細" />

      <Section>
        <div className="lg:flex">
	  <div className="lg:w-1/2 lg:pr-4 mb-8 lg:mb-0">
	    <Image
	      src={work.src}
	      alt={work.title}
	      width={800}
	      height={800}
	      className="w-full h-auto rounded"
	    />
	  </div>
	  <div className="lg:w-1/2 lg:pl-4">
	    <h2 className="text-2xl font-bold mb-4">{work.title}</h2>
	    <p>
	      制作時期：{work.date}
	    </p>
	    <p>{work.description}</p>
	  </div>
	</div>
      </Section>
    </Main>
  );
}

export async function generateStaticParams() {
  return works.map((w) => ({
    slug: w.slug,
  }));
}

export default WorkDetailPage;
export { generateMetadata };
