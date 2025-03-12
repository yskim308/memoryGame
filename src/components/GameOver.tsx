export { GameOver, GameWon };

function GameOver() {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="flex bg-red-300 h-1/2 w-1/2  rounded-3xl justify-center items-center">
        <p className="font-sans font-bold text-4xl">Game Over</p>
      </div>
    </div>
  );
}

function GameWon() {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="flex bg-green-300 h-1/2 w-1/2  rounded-3xl justify-center items-center">
        <p className="font-sans font-bold text-4xl">Game Won</p>
      </div>
    </div>
  );
}
