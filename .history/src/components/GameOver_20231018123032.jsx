import GameState from "./GameState";

function GameOver({gamestate}) {
    switch(gamestate){
        case GameState.inprogress:
            return <></>;
        case GameState.playerOWins:
            returndiv    
        default:
            return <></>    
    }
}

export default GameOver;