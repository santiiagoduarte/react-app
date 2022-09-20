import React from "react";

const PageTitle = ({msgTitle}) => {
    let spanStyle = {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'color',
    }
    let textStyle = {
        fontSize: 45,
        fontWeight: 300,
        fontStyle: 'bold',
        color: 'white',
    }

    return (
        <span style={spanStyle}>
            <h2 style={textStyle}>{msgTitle}</h2>
        </span>
    )
};

export default PageTitle;