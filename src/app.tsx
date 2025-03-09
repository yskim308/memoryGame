import { useEffect, useState } from "react";
import { CardObject } from "./types";
import { shuffleCards, getGifs } from "./utils";
import Card from "./components/Card";
import { Footer, GameHeader } from "./components/Layout";
import { GameWon, GameOver } from "./components/GameOver";
const MAX_CARDS = 20;

export default function App() {
  const [clickedCards, setClickedCards] = useState<string[]>([]);
  const [gameCount, setGameCount] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isGameWon, setIsGameWon] = useState<boolean>(false);
  const [cardArray, setCardArray] = useState<CardObject[]>([]);

  useEffect(() => {
    getGifs("cats", `${MAX_CARDS}`).then((resolvedCardArray: CardObject[]) => {
      setCardArray(resolvedCardArray);
    });
  }, []);

  const onCardClick = (card: CardObject) => {
    const isClicked: boolean = clickedCards.includes(card.id) ? true : false;
    // if game is over (clicked card is clicked)
    if (isClicked) {
      setClickedCards([]);
      setGameCount(0);
      setIsGameOver(true);
      setTimeout(() => {
        setIsGameOver(false);
      }, 2000);
      const shuffled: CardObject[] = shuffleCards(cardArray);
      setCardArray(shuffled);
    } else if (gameCount == MAX_CARDS - 1) {
      // game is won
      setClickedCards([]);
      setGameCount(0);
      setIsGameWon(true);
      setTimeout(() => {
        setIsGameWon(false);
      }, 2000);
    } else {
      // continue playing the game
      const shuffled: CardObject[] = shuffleCards(cardArray);
      setCardArray(shuffled);
      setClickedCards([...clickedCards, card.id]);
      setGameCount(gameCount + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Memory Game!</h1>
      <GameHeader count={gameCount} />
      {isGameOver && <GameOver />}
      {isGameWon && <GameWon />}
      <div className="grid lg:w-4/5 lg:grid-cols-5 md:grid-cols-4 md:w-5/6 grid-cols-3">
        {cardArray.map((card) => {
          return <Card handleClick={onCardClick} card={card} key={card.id} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
