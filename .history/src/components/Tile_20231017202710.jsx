function Tile({className  ,value,onclick,player}) {
    return <div onClick = {onclick} className={`tile ${className}`}>{value}</div>
}

export default Tile;
