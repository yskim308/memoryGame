import { useEffect, useState } from "react";
import { CardObject, SearchBarData } from "./types";
import { shuffleCards, getGifs } from "./utils";
import Card from "./components/Card";
import { Footer, GameHeader, Header, SearchBar } from "./components/Layout";
import { GameWon, GameOver } from "./components/GameOver";

export default function App() {
  const [clickedCards, setClickedCards] = useState<string[]>([]);
  const [gameCount, setGameCount] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isGameWon, setIsGameWon] = useState<boolean>(false);
  const [cardArray, setCardArray] = useState<CardObject[]>([]);
  const [searchData, setSearchData] = useState<SearchBarData>();

  const MAX_CARDS = parseInt(searchData?.limit || "20", 10);
  useEffect(() => {
    getGifs(searchData?.query || "cats", searchData?.limit || "20").then(
      (resolvedCardArray: CardObject[]) => {
        setCardArray(resolvedCardArray);
      },
    );
  }, [searchData]);

  const onSearchSubmit = (data: SearchBarData) => {
    setSearchData(data);
    setGameCount(0);
    setClickedCards([]);
    console.log(data);
  };

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
    <div className="bg-zinc-50 flex flex-col items-center justify-center">
      <Header />
      <SearchBar handleSubmit={onSearchSubmit} />
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
