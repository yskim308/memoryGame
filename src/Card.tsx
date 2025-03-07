import { useState } from "react";
import { CardObject, CardProps } from "./types";

export default function Card({ card, handleClick }: CardProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`font-bold m-3 ${hovered ? "bg-red-500" : ""}`}
    >
      <div className="aspect-square" onClick={() => handleClick(card)}>
        <img src={card.url} alt="url is fucked?" className="w-full h-full" />
      </div>
      <h1>{card.desc}</h1>
    </div>
  );
}
