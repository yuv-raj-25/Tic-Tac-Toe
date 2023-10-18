import GameState from "./GameState";

function GameOver({gamestate}) {
    switch(gamestate){
        case GameState.inprogress:
            return <></>;
        case GameState.playerOWins:
            return <div className="game-o"></div>    
        default:
            return <></>    
    }
}

export default GameOver;