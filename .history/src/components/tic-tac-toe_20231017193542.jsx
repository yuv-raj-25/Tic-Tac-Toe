import Board from "./board";
import { useState } from "react";

function TicTacToe(){
    const [tiles, settiles] = useState();
    return(
        <div>
            <h1>Tic Tac Toe</h1>

            <Board/>
        </div>
    );
}
export default TicTacToe;