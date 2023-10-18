function Tile({className  ,value,onclick,player}) {
    let hover = 
    return <div onClick = {onclick} className={`tile ${className}`}>{value}</div>
}

export default Tile;
