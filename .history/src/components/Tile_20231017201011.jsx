function Tile({className  ,value,onclick}) {
    return <div onClick =  className={`tile ${className}`}>{value}</div>
}

export default Tile;
