function Tile({className  ,value,onclick,player}) {
    let h
    return <div onClick = {onclick} className={`tile ${className}`}>{value}</div>
}

export default Tile;
