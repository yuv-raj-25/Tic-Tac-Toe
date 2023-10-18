function Tile({className  ,value,onclick,player}) {
    let hoverClass  = nu;;
    return <div onClick = {onclick} className={`tile ${className}`}>{value}</div>
}

export default Tile;
