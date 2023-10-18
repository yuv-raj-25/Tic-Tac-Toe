import Board from "./board";
import { useState } from "react";

function TicTacToe(){
    const [tiles, setTiles] = useState(Array(9).fill(null));
    return(
        <div>
            <h1>Tic Tac Toe</h1>

            <Board tile/>
        </div>
    );
}
export default TicTacToe;