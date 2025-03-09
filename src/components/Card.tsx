import { useState } from "react";
import { CardObject, CardProps } from "../types";

export default function Card({ card, handleClick }: CardProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="m-1"
    >
      <div
        className={`rounded-3xl aspect-square w-auto p-2 ${hovered ? "bg-zinc-200" : ""}`}
        onClick={() => handleClick(card)}
      >
        <img
          src={card.url}
          alt="url is fucked?"
          className="rounded-3xl w-full h-full"
        />
      </div>
    </div>
  );
}
