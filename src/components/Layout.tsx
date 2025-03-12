import { ChangeEvent, FormEvent, useState } from "react";
import { GameHeaderProps, SearchBarData, SearchBarProps } from "../types";
export { GameHeader, Footer, Header, SearchBar };

function Header() {
  return (
    <div className="text-5xl font-mono py-1 w-full text-center bg-zinc-200">
      Memory!
    </div>
  );
}

function SearchBar({ handleSubmit }: SearchBarProps) {
  const [searchData, setSearchData] = useState<SearchBarData>({
    query: "cats",
    limit: 20,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue: string | number = value;
    if (name === "limit") {
      newValue = parseInt(value, 10);
    }
    setSearchData({
      ...searchData,
      [name]: newValue,
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit(searchData);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="query">Keyword</label>
      <input
        type="text"
        id="query"
        name="query"
        value={searchData.query}
        onChange={handleChange}
      ></input>

      <label htmlFor="limit">Number of Tiles: {searchData.limit}</label>
      <input
        type="range"
        id="limit"
        name="limit"
        min="2"
        max="50"
        value={searchData.limit}
        onChange={handleChange}
      ></input>

      <button type="submit">submit</button>
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
