import { useState } from "react";
import { CardObject } from "./types";

export default function App() {
  const [clickedCards, setClickedCards] = useState<CardObject[]>([]);
  const [gameCount, setGameCount] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  let cardArray: CardObject[];
}
