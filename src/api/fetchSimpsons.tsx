// https://thesimpsonsquoteapi.glitch.me/quotes?count=50

import type { Character } from "~/types/types";

export async function fetchSimpsons(): Promise<Character[]> {
  const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=50";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch simpsons");
  }
  const results = await response.json();

  return results;
}
