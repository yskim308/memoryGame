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
    <div>
      <p>footer goes here?</p>
    </div>
  );
}
