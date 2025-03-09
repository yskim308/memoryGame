import { GameHeaderProps } from "../types";
export { GameHeader, Footer };

function GameHeader({ count }: GameHeaderProps) {
  return (
    <div className="sticky top-0">
      <h1>count: {count}</h1>
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
