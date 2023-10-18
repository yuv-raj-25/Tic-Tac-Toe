function Tile({className  ,value,onclick,player}) {
    let hoverClass  = null;
    if(value == null && player != null){
        hoverClass = `${player.toLowerCase()}-ho`
    }
    return <div onClick = {onclick} className={`tile ${className}`}>{value}</div>
}

export default Tile;
