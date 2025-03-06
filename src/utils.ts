import { CardObject, GiphyObject } from "./types";

export default async function getGifs(
  search: string,
  gifs: string,
): Promise<CardObject[]> {
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
