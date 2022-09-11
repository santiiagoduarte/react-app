import React from "react";

const PageTitle = ({msgTitle}) => {
    let spanStyle = {
        backgroundColor: 'color',
        padding: 35
    }

    return (
        <span style={spanStyle}>
            <h2>{msgTitle}</h2>
        </span>
    )
};

export default PageTitle;