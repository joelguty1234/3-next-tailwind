import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
import Image from 'next/image'

export const metadata = {
  title: "Reviews",
  description: "Only the best",
};

export default async function reviewsPage() {
  const reviews = await getReviews(6);
  return (
    <>
      <Heading>Reviews</Heading>
      <p>Here we&apos;ll list all the reviews</p>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="w-80 rounded-t-xl border bg-white shadow hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <div>
                <Image
                  src={review.image}
                  alt="" priority={index === 0}
                  width={"320"}
                  height={"180"}
                  className="mb-2 rounded-t-xl"
                />
                <h2 className="py-1 text-center font-orbitron font-semibold">
                  {review.title}
                </h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
