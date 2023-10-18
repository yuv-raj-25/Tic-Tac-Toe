import GameState from "./GameState";

function GameOver({gamestate}) {
    switch(gamestate){
        case GameState.inprogress:
            return <></>;
        case GameState.pl    
        default:
            return <></>    
    }
}

export default GameOver;