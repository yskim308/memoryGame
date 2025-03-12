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
    query: "",
    limit: "20",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSubmit(searchData);
  };
  return (
    <div className="w-full flex justify-center bg-zinc-200">
      <form
        onSubmit={onSubmit}
        className="flex justify-around items-center w-full md:w-1/2 lg:w-4/12 py-3"
      >
        <input
          type="text"
          id="query"
          name="query"
          placeholder="Keyword"
          autoComplete="off"
          className="bg-zinc-100 rounded-lg w-30 md:w-40 p-1 mx-5 h-8"
          value={searchData.query}
          onChange={handleChange}
        ></input>

        <div className="flex flex-col items-center">
          <label htmlFor="limit" className="font-semibold font-mono">
            {searchData.limit} tiles
          </label>
          <input
            type="range"
            id="limit"
            name="limit"
            min="2"
            max="50"
            className="w-30 lg:w-45"
            value={searchData.limit}
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit">
          <img src="./magnify.svg" className="w-7" />
        </button>
      </form>
    </div>
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
