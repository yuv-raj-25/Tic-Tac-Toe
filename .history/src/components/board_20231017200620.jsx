import Strike from "./Strike";
import Tile from "./Tile";

function Board({ tiles,onTileClick}) {

    return <div className="board">

        <Tile onclick value = {tiles[0]} className = " right-border bottom-border"/>
        <Tile value = {tiles[1]}className = " right-border bottom-border"/>
        <Tile value = {tiles[2]} className = "  bottom-border"/>
        <Tile value = {tiles[3]} className = " right-border bottom-border"/>
        <Tile value = {tiles[4]} className = " right-border bottom-border"/>
        <Tile value = {tiles[5]} className = "  bottom-border"/>
        <Tile value = {tiles[6]} className = " right-border r"/>
        <Tile value = {tiles[7]} className = " right-border "/>
        <Tile value = {tiles[8]} className = " "/>
        <Strike/>
    </div>
        
}

export default Board;
