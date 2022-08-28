import ItemCount from "../components/ItemCount";

const ItemListContainer = ({msg}) => {
    let titleStyle = {
        backgroundColor: 'color',
        margin: 40,
        fontSize: 45,
        fontWeight: 300,
        fontStyle: 'bold',
        color: 'white'
    }
    let countCardStyles = {
        backgroundColor: '#F1F1F1',
        padding: 20,
        fontSize: 18
    }
    let itemBoxCard = {
        border: 'solid'
    }

    const onAdd = (price) => {
        (console.log('You have purchased $ {price} in items'));
    }



    return (
        <div style={itemBoxCard}>
            <div>
                <span>
                    <h2 style={titleStyle} >{msg}</h2>
                </span>
                <div style={countCardStyles}>
                    <ItemCount initial={1} stock={10} onAdd={onAdd}/>
                </div>
            </div>
        </div>  

    )
    
}


export default ItemListContainer;