export { GameOver, GameWon };

function GameOver() {
  return (
    <div className="text-xl font-bold">
      <p>Game over dumbass!</p>
    </div>
  );
}

function GameWon() {
  return (
    <div className="text-xl font-bold">
      <p>Game Won!</p>
    </div>
  );
}
