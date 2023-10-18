import Board from "./board";
import { useState } from "react";


const PLAYER_X = "X";
const PLAYER_O = "O";

function TicTacToe(){
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [player, setplayer] = useState(PLAYER_X);

    const handleTileClick = (index) =>{
        console.log(index);
        const newtile = [...tiles];
        newtile[index] = player ;
        setTiles(newtile);
        if(player ===PLAYER_X){
            setplayer(PLAYER_O);
        }
        else{
            setplayer(PLAYER_X)
        }
        


    };
    return(
        <div>
            <h1>Tic Tac Toe</h1>

            <Board tiles={tiles}  onTileClick = {handleTileClick}/>
        </div>
    );
}
export default TicTacToe;