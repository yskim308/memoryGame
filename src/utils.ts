import { CardObject, GiphyObject } from "./types";
export { getGifs, shuffleCards };

async function getGifs(search: string, gifs: string): Promise<CardObject[]> {
  const key = "srJ0aPiyv8XaGUvreaq3c50dSFOujB1C";
  const q = search;
  const limit = gifs;
  const cardArray: CardObject[] = [];
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${q}&limit=${limit}`,
    );
    const gifs: GiphyObject[] = await response.json();
    gifs.map((gif) => {
      cardArray.push({
        url: gif.url,
        id: gif.id,
        desc: gif.title,
      });
    });
    return cardArray;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    console.log("all done");
  }
}

function shuffleCards(cards: CardObject[]) {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
