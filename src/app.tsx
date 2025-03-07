import { useEffect, useState } from "react";
import { CardObject } from "./types";
import { shuffleCards, getGifs } from "./utils";
import Card from "./Card";
const MAX_CARDS = 20;

export default function App() {
  const [clickedCards, setClickedCards] = useState<string[]>([]);
  const [gameCount, setGameCount] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [cardArray, setCardArray] = useState<CardObject[]>([]);

  useEffect(() => {
    getGifs("cats", `${MAX_CARDS}`).then((resolvedCardArray: CardObject[]) => {
      setCardArray(resolvedCardArray);
    });
  }, []);

  const onCardClick = (card: CardObject) => {
    const isClicked: boolean = clickedCards.includes(card.id) ? true : false;
    if (isClicked) {
      setClickedCards([]);
      setGameCount(0);
      setIsGameOver(true);
    } else {
      if (gameCount == MAX_CARDS - 1) {
        // todo: the logic should be seperated from generic game over if the user actually wins
        setClickedCards([]);
        setGameCount(0);
        setIsGameOver(true);
      } else {
        const shuffled: CardObject[] = shuffleCards(cardArray);
        setCardArray(shuffled);
        setClickedCards([...clickedCards, card.id]);
        setGameCount(gameCount + 1);
      }
    }
  };

  return (
    <div>
      {cardArray.map((card) => {
        return <Card handleClick={onCardClick} card={card} />;
      })}
    </div>
  );
}
