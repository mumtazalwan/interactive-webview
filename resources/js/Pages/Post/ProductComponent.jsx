import React from "react";

export default function ProductComponent(props) {
    const {product} = props;
    return (
        <>
            <h1>Product Details</h1>
            <p>Name: {product.Name}</p>
            <p>Price: {product.Price}</p>
            <p>Stock: {product.Stock}</p>
        </>
    )
}

