import GameState from "./GameState";

function GameOver({gamestate}) {
    switch(gamestate){
        case GameState.inprogress:
            return <></>;
        case GameState.playerOWins:
            return <div className="game-over">O wins</div>    
        case GameState.playerXWins:
            return <div className="game-over">X wins</div>    
        case GameState.d:
            return <div className="game-over">X wins</div>    
        default:
            return <></>    
    }
}

export default GameOver;