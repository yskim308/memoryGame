import { ChangeEvent, FormEvent, useState } from "react";
import { GameHeaderProps, SearchBarData, SearchBarProps } from "../types";
export { GameHeader, Footer, Header, SearchBar };

function Header() {
  return (
    <>
      <div className="text-5xl font-mono py-1 w-full text-center bg-zinc-200">
        Memory!
      </div>
      <div className="text-sm font-mono w-full bg-zinc-200 text-center">
        Click on every image, but don't click the same image twice :)
      </div>
    </>
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
        className="flex flex-col justify-center items-center w-full md:w-1/2 lg:w-4/12 py-3"
      >
        <div className="flex">
          <input
            type="text"
            id="query"
            name="query"
            placeholder="Keyword"
            autoComplete="off"
            className="bg-zinc-100 w-auto p-1 h-8 "
            value={searchData.query}
            onChange={handleChange}
          ></input>
          <button type="submit" className="bg-zinc-100">
            <img src="./magnify.svg" className="w-7" />
          </button>
        </div>

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
            className="w-auto"
            value={searchData.limit}
            onChange={handleChange}
          ></input>
        </div>
      </form>
    </div>
  );
}

function GameHeader({ count }: GameHeaderProps) {
  return (
    <div className="sticky top-0 bg-zinc-200 w-full h-1/6 text-center text-zinc-900">
      <h1 key={count} className="font-bold text-xl animate-jump">
        count: {count}
      </h1>
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
