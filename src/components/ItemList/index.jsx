import React from "react";
import Item from "../Item";

const ItemList = ({ data = [] }) => {
    return data.map((relojes) => <Item key={relojes.id} info={relojes} />);
};

export default ItemList;