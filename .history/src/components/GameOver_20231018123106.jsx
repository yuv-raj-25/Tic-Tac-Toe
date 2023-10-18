import GameState from "./GameState";

function GameOver({gamestate}) {
    switch(gamestate){
        case GameState.inprogress:
            return <></>;
        case GameState.playerOWins:
            return <div className="game-over">O wins</div>    
        case GameState.playerOWins:
            return <div className="game-over">O wins</div>    
        default:
            return <></>    
    }
}

export default GameOver;