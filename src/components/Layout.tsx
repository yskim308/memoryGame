import { GameHeaderProps } from "../types";
export { GameHeader, Footer, Header };

function Header() {
  return <div className="text-3xl">Memory Game</div>;
}

function GameHeader({ count }: GameHeaderProps) {
  return (
    <div className="sticky top-0 bg-green-200 w-full text-center text-green-900">
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
