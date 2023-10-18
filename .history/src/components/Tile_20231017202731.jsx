function Tile({className  ,value,onclick,player}) {
    let hoverC = 
    return <div onClick = {onclick} className={`tile ${className}`}>{value}</div>
}

export default Tile;
