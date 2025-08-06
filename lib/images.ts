/**
 * Author: Jeffrey Zhou
 * Calls the NASA Astronomy Picture of the Day (APOD) Api, returns the image url, title, and description
 */

"use server";

// NASA Api Key
const IMAGE_API_KEY = "pNJyLYPfg3Z4NxrN3oLY5olYZpPVaraLICiU3eqO"

export async function getImage(): Promise<{ explanation: string; title: string; url: string } | null> {
    const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${IMAGE_API_KEY}`,
        { cache: "no-store" }
    );

    if (res.status == 429) {
        return null;
    } else if (res.status !== 200) {
        throw new Error("Error fetching Image API");
    }

    const jsonRes = await res.json();

    return {explanation: jsonRes.explanation, title: jsonRes. title, url: jsonRes.url};
}
