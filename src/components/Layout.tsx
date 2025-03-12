import { useState } from "react";
import { GameHeaderProps } from "../types";
export { GameHeader, Footer, Header, SearchBar };

function Header() {
  return (
    <div className="text-5xl font-mono py-1 w-full text-center bg-zinc-200">
      Memory!
    </div>
  );
}

function SearchBar() {
  const [searchText, setSearchText] = useState<string>("");
  const [queryRange, setQueryRange] = useState<number>(20);

  return (
    <form>
      <label htmlFor="keyword">Keyword</label>
      <input
        type="text"
        id="keyword"
        name="keyword"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      ></input>

      <label htmlFor="query">Number of TIles</label>
      <input
        type="range"
        id="query"
        name="query"
        value={queryRange}
        onChange={(event) => {
          setQueryRange(parseInt(event.target.value, 10));
        }}
      ></input>

      <button type="button">Sumbit</button>
    </form>
  );
}

function GameHeader({ count }: GameHeaderProps) {
  return (
    <div className="sticky top-0 bg-zinc-200 w-full h-1/6 text-center text-zinc-900">
      <h1 className="font-bold text-lg">count: {count}</h1>
    </div>
  );
}

function Footer() {
  return (
    <div className="mt-auto">
      <div className="flex">
        <div>
          <a href="https://github.com/yskim308/memorygame" target="none">
            <img className="w-8" src="./github.svg" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/young-seo-kim-464b11220/"
            target="none"
          >
            <img className="w-8" src="./linkedin.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}
