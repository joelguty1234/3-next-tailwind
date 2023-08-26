import { CACHE_TAG_REVIEWS } from "@/lib/reviews";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
    const payload = await request.json()
    if (payload.model === 'review') {
        revalidatePath(CACHE_TAG_REVIEWS)
        console.log('REVALIDATED: ', CACHE_TAG_REVIEWS)
    }

    return new Response(null, { status: 204 })
}