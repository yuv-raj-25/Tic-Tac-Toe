function Tile({className  ,value,onclick,player}) {
    let hoverClass  = null;
    if(value == null && player != null){
        hover
    }
    return <div onClick = {onclick} className={`tile ${className}`}>{value}</div>
}

export default Tile;
