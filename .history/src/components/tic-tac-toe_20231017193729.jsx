import Board from "./board";
import { useState } from "react";

function TicTacToe(){
    const [tiles, setTiles] = useState(Array(9).);
    return(
        <div>
            <h1>Tic Tac Toe</h1>

            <Board/>
        </div>
    );
}
export default TicTacToe;