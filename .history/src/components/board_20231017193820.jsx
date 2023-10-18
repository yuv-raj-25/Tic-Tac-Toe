import Strike from "./Strike";
import Tile from "./Tile";

function Board({tiles }) {
    return <div className="board">

        <Tile className = " right-border bottom-border"/>
        <Tile className = " right-border bottom-border"/>
        <Tile className = "  bottom-border"/>
        <Tile className = " right-border bottom-border"/>
        <Tile className = " right-border bottom-border"/>
        <Tile className = "  bottom-border"/>
        <Tile className = " right-border r"/>
        <Tile className = " right-border "/>
        <Tile className = " "/>
        <Strike/>
    </div>
        
}

export default Board;
