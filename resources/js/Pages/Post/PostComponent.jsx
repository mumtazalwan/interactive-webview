import React from "react";
import ProductComponent from "@/Pages/Post/ProductComponent.jsx";

export default function PostComponent() {
    const product = {
        Name: 'First Product',
        Price: 200,
        Stock: 'InStock',
    }

    return (
        <>
            <ProductComponent product={product}/>
        </>
    )
}
