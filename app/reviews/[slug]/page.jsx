import Heading from "@/components/Heading";
import ShareButtons from "@/components/ShareButtons";
import { getReview, getSlugs } from "@/lib/reviews";
import Image from 'next/image'
import { notFound } from 'next/navigation'


export async function generateStaticParams() {
  const slugs = await getSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  if (!review) {
    notFound()
  }
  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  console.log("[ReviewPage] rendering: ", slug);
  const review = await getReview(slug);
  if (!review) {
    notFound()
  }
  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="font-semibold pb-3">
        {review.subtitle}
      </p>
      <div className="flex items-baseline gap-3">
        <p className="pb-2 italic">{review.date}</p>
        <ShareButtons />
      </div>
      <Image
        src={review.image}
        alt="" priority
        width={"640"}
        height={"360"}
        className="mb-2 rounded-2xl"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="prose prose-slate max-w-screen-sm"
      />
    </>
  );
}
