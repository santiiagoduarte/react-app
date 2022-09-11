import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail/index";


const ItemDetailContainer = ({msg}) => {

    const [products, setProducts] = useState([]);

    const ItemDetailPromise = async () => {
        const res = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=monitoresfocal');
        const data = await res.json();
        setProducts(data.results[10]);
    }
    useEffect(() => {
        ItemDetailPromise();
    }, []);

    return (
            <>
                <ItemDetail img={products.thumbnail} title={products.title} price={products.price} />
            </>
    )
}

export default ItemDetailContainer;