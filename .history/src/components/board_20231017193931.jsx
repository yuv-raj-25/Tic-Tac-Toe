import Strike from "./Strike";
import Tile from "./Tile";

function Board({ tiles }) {

    return <div className="board">

        <Tile value = {tiles[0]} className = " right-border bottom-border"/>
        <Tile value = {tiles[1]}className = " right-border bottom-border"/>
        <Tile value = {tiles[2]} className = "  bottom-border"/>
        <Tile value = {tiles[3]} className = " right-border bottom-border"/>
        <Tile value = {tiles[4]} className = " right-border bottom-border"/>
        <Tile value = {tiles[]} className = "  bottom-border"/>
        <Tile value = {tiles[0]} className = " right-border r"/>
        <Tile value = {tiles[0]} className = " right-border "/>
        <Tile value = {tiles[0]} className = " "/>
        <Strike/>
    </div>
        
}

export default Board;
