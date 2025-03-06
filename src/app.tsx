import { useEffect, useState } from "react";
import { CardObject } from "./types";
import getGifs from "./utils";

export default function App() {
  const [clickedCards, setClickedCards] = useState<number[]>([]);
  const [gameCount, setGameCount] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [cardArray, setCardArray] = useState<CardObject[]>([]);

  useEffect(() => {
    getGifs().then((resolvedCardArray: CardObject[]) => {
      setCardArray(resolvedCardArray);
    });
  }, []);
}
