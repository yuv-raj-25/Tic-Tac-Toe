function Tile({className  ,value,onclick}) {
    return <div on className={`tile ${className}`}>{value}</div>
}

export default Tile;
