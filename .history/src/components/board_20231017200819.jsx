import Strike from "./Strike";
import Tile from "./Tile";

function Board({ tiles,onTileClick}) {

    return <div className="board">

        <Tile onclick = {()=>onTileClick(0)} value = {tiles[0]} className = " right-border bottom-border"/>
        <Tile onclick = {()=>onTileClick(1)} value = {tiles[1]}className = " right-border bottom-border"/>
        <Tile onclick = {()=>onTileClick(2)} value = {tiles[2]} className = "  bottom-border"/>
        <Tile onclick = {()=>onTileClick(3)} value = {tiles[3]} className = " right-border bottom-border"/>
        <Tile onclick = {()=>onTileClick(4)} value = {tiles[4]} className = " right-border bottom-border"/>
        <Tile onclick = {()=>onTileClick(5)} value = {tiles[5]} className = "  bottom-border"/>
        <Tile onclick = {()=>onTileClick(6)} value = {tiles[6]} className = " right-border r"/>
        <Tile onclick = {()=>onTileClick()} value = {tiles[7]} className = " right-border "/>
        <Tile onclick = {()=>onTileClick(0)} value = {tiles[8]} className = " "/>
        <Strike/>
    </div>
        
}

export default Board;
