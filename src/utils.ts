export default async function getGifs() {
  const key = "AIzaSyAua1ztHOGQCQwOBkzJsaxe1zz71HURuEQ";
  const q = "cats";
  const limit = "20";
  try {
    const response = await fetch(
      `https://g.tenor.com/v1/search?key=${key}&q=${q}&limit=${limit}`,
    );
    const gifs = await response.json();
    console.log(gifs);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("all done");
  }
}

getGifs();
