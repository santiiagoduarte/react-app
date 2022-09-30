import React from "react";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import PageTitle from '../components/PageTitle/index'


const items = [
    {
        id: 1,
        image: "https://vintageking.com/media/catalog/product/cache/c8660c81d7196df55c33284290821786/b/a/barefoot_micromain27_gen2_pair.jpg",
        itemName: "BAREFOOT SOUND MICROMAIN27 GEN2 3.5-WAY ACTIVE STUDIO MONITOR - PAIR",
        price: '$10,995.00'
    },
    {
        id: 2,
        image: "https://vintageking.com/media/catalog/product/cache/c8660c81d7196df55c33284290821786/b/a/barefoot-micromain-26_50552_1.jpg",
        itemName: "BAREFOOT SOUND MICROMAIN26 4-WAY ACTIVE STUDIO MONITOR - PAIR",
        price: '$12,995.00'
    },
    {
        id: 3,
        image: "https://vintageking.com/media/catalog/product/cache/c8660c81d7196df55c33284290821786/b/a/barefoot_mm35_pair_4.jpg",
        itemName: "BAREFOOT SOUND MICROMAIN45 3-WAY ACTIVE STUDIO MONITOR - PAIR",
        price: '$6,995.00'
    },
    {
        id: 4,
        image: "https://vintageking.com/media/catalog/product/cache/c8660c81d7196df55c33284290821786/b/a/barefoot-footprint02-pair_132111_1.jpg",
        itemName: "BAREFOOT SOUND FOOTPRINT02 3-WAY ACTIVE STUDIO MONITOR - PAIR",
        price: '$3,495.00'
    },
]

const ItemListContainer = ({msg}, props) => {

    let pageStyles = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        backgroundColor: '#F1F1F1',
        padding: 50,
        fontSize: 18
    }

    let content = props.content;
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(items);
            }, 2000);
        });
        getData.then((res) => setData(res));
    }, []);
    return (
        <div>
            <div>
                <span>
                    <PageTitle msgTitle={msg}></PageTitle>
                </span>
                <div style={pageStyles}>
                    {content}
                    <ItemList data={data} />
                    <ItemDetailContainer />
                </div>
            </div>
        </div>  
    );

};

export default ItemListContainer;