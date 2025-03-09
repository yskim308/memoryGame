export { GameOver, GameWon };

function GameOver() {
  return (
    <div className="text-xl font-bold w-full bg-red-300 text-center">
      <p>Game Over</p>
    </div>
  );
}

function GameWon() {
  return (
    <div className="text-xl font-bold w-full bg-green-300 text-center">
      <p>Game Won!</p>
    </div>
  );
}
