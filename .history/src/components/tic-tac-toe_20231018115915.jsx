import Board from "./board";
import { useState,useEffect } from "react";

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinaton = [
    // rows 
    {combo:[0,1,2]}
]

function checkWinner(){
    console.log("check winner");
}

function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [player, setplayer] = useState(PLAYER_X);

  const [strikeClass, setstrikeClass] = useState();

  const handleTileClick = (index) => {
    // console.log(index);
    if (tiles[index] != null) {
      return;
    }
    const newtile = [...tiles];
    newtile[index] = player;
    setTiles(newtile);
    if (player === PLAYER_X) {
      setplayer(PLAYER_O);
    } else {
      setplayer(PLAYER_X);
    }
  };
  useEffect(()=>{
    checkWinner();
  },[tiles])
  return (
    <div>
      <h1>Tic Tac Toe</h1>

      <Board
        player={player}
        tiles={tiles}
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
      />
    </div>
  );
}
export default TicTacToe;
