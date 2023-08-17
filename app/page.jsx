
import Heading from "@/components/Heading";
import Link from "next/link";
import Image from 'next/image'
import { getReviews } from "@/lib/reviews";

export default async function homePage() {
  // console.log("rendering");
  const reviews = await getReviews(3)
  return (
    <>
      <Heading>Advizo</Heading>
      <h2>Productivity Tech Advisory SAC</h2>
      <p>Outsourced Tech Talent.</p>
      <p className="pb-3">Fast and Flexible.</p>
      <ul className="flex flex-col gap-3">
        {reviews.map((review) => (
          <li key={review.slug}
            className="w-80 rounded-t-2xl border bg-white shadow 
                hover:shadow-xl 
                sm:w-fit sm:rounded-l-2xl
                sm:rounded-r-none"
          >
            <Link
              href={`/reviews/${review.slug}`}
              className="flex flex-col sm:flex-row"
            >
              <Image
                src={review.image}
                alt=""
                width={"320"}
                height={"180"}
                className="rounded-t-2xl sm:rounded-l-2xl sm:rounded-r-none"
              />
              <div className="px-2 py-1 text-center sm:text-left">
                <h2 className="py-1 text-center font-orbitron font-semibold sm:px-2">
                  {review.title}
                </h2>
                <p className="hidden pt-2 sm:block">
                  {review.subtitle}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

    </>
  );
}
