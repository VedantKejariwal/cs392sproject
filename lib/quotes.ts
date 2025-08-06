/* 
Author: Veer Agrawal (veer1@bu.edu)
Description: Fetches one random quote from ZenQuotes each time
Api details: https://zenquotes.io/
*/

"use server";


export async function getRandomQuote(): Promise<{ q: string; a: string }> {
  const res = await fetch("https://zenquotes.io/api/random", { cache: "no-store" });
  if (!res.ok) throw new Error("Quote API error");
  const [quote] = (await res.json()) as { q: string; a: string }[];
  return quote;
}
