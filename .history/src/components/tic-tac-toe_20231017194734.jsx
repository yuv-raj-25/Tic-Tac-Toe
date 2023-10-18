import Board from "./board";
import { useState } from "react";


const PLAYER_X = "X";
const PLAYER_O = "O";

function TicTacToe(){
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [player, setplayer] = useState(PLAYER_X);

    const handleTileClick = (index) =>{
        console.log(index);

    };
    return(
        <div>
            <h1>Tic Tac Toe</h1>

            <Board tiles={tiles}  onTileClick = {/>
        </div>
    );
}
export default TicTacToe;