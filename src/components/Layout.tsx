import { GameHeaderProps } from "../types";
export { GameHeader, Footer, Header };

function Header() {
  return (
    <div className="text-5xl font-mono py-1 w-full text-center bg-zinc-200">
      Memory!
    </div>
  );
}

function GameHeader({ count }: GameHeaderProps) {
  return (
    <div className="sticky top-0 bg-zinc-200 w-full text-center text-zinc-900">
      <h1 className="font-bold text-lg">count: {count}</h1>
    </div>
  );
}

function Footer() {
  return (
    <div className="mt-auto">
      <div className="flex">
        <div>
          <a href="https://github.com/yskim308/memorygame">
            <img className="w-8" src="./github.svg" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/young-seo-kim-464b11220/">
            <img className="w-8" src="./linkedin.svg" />
          </a>
        </div>
      </div>
    </div>
  );
}
