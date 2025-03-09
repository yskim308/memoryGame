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
        className={`aspect-square w-auto p-2 ${hovered ? "bg-red-500" : ""}`}
        onClick={() => handleClick(card)}
      >
        <img src={card.url} alt="url is fucked?" className="w-full h-full" />
        <p className="text-xs hidden lg:block">{card.desc}</p>
      </div>
    </div>
  );
}
