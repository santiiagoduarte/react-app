const ItemListContainer = ({color, msg}) => {
    let titleStyle = {
        backgroundColor: 'color',
        paddingBottom: 40,
        margin: 40,
        fontSize: 45,
        fontWeight: 300,
        fontStyle: 'bold',
        color: 'white'

    }
    return (
        <span>
            <h2 style={titleStyle} >{msg}</h2>
            {/* {children} */}
        </span>
    )
}


export default ItemListContainer;