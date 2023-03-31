// https://thesimpsonsquoteapi.glitch.me/quotes?count=50

export async function fetchSimpsons(): Promise<any> {
  const response = await fetch(
    "https://thesimpsonsquoteapi.glitch.me/quotes?count=50"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch simpsons");
  }
  const results = await response.json();
  //   console.log(results);

  //   const uniqueCharacters = [
  //     ...new Set(results.map((quote: any) => quote.character)),
  //   ];
  //   console.log(uniqueCharacters);

  return results;
}
