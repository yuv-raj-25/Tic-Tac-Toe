function Tile({className  ,value,onclick,player}) {
    let hoverCl = 
    return <div onClick = {onclick} className={`tile ${className}`}>{value}</div>
}

export default Tile;
