function Tile({className  ,value,onclick,player}) {
    let hoverClass  = null;
    if(value == null && player != null){
        hoverClass = `${player.toLowerCase()}-hover`;
    }
    return <div onClick = {onclick} className={`tile ${className} ${hoverClass}`}>{value}</div>
}

export default Tile;
