import { CardObject, GiphyObject } from "./types";
export { getGifs, shuffleCards };
import defaultData from "./default.json";

async function getGifs(
  search: string,
  gifNumber: string,
): Promise<CardObject[]> {
  const key = "srJ0aPiyv8XaGUvreaq3c50dSFOujB1C";
  const q = search;
  const limit = gifNumber;
  const cardArray: CardObject[] = [];
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${q}&limit=${limit}`,
      {
        mode: "cors",
      },
    );
    if (!response.ok) {
      alert(
        "API request failed. The rate limit may have been exceeded. Using default data with 'cats' as the search query",
      );
      processJson(defaultData, cardArray);
    } else {
      const gifs: GiphyObject = await response.json();
      processJson(gifs, cardArray);
    }
    return cardArray;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    console.log("all done");
  }
}

function processJson(gifs: GiphyObject, cardArray: CardObject[]) {
  gifs.data.map((gif) => {
    cardArray.push({
      url: gif.images.original.url,
      id: gif.id,
      desc: gif.title,
    });
  });
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
