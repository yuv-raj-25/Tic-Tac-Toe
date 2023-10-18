import Board from "./board";
import { useState,useEffect } from "react";

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinaton = [
    // rows 
    {combo:[0,1,2], strikeClass: "strike-row-1"},
    {combo:[3,4,5], strikeClass: "strike-row-2"},
    {combo:[6,7,8], strikeClass: "strike-row-3"},
    
    // columns
    {combo:[0,3,6], strikeClass: "strike-column-1"},
    {combo:[1,4,7], strikeClass: "strike-column-2"},
    {combo:[2,5,8], strikeClass: "strike-column-3"},

    // diagonal 
    {combo:[0,4,8], strikeClass: "strike-diagonal-1"},
    {combo:[2,4,6], strikeClass: "strike-diagonal-2"}



];

function checkWinner(tiles, setstrikeClass){
    // console.log("check winner");
    for(const{combo , strikeClass} of winningCombinaton){
        const tileValue1 = tiles[combo[0]];
        const tileValue2 = tiles[combo[1]];
        const tileValue3 = tiles[combo[2]];

        if(tileValue1 != null && tileValue1 == tileValue2 && )
    }
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
    checkWinner(tiles, setstrikeClass);
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
