function Tile({className  ,value,onclick}) {
    return <div onClick = {onclick} className={`tile ${className}`}>{value}</div>
}

export default Tile;
