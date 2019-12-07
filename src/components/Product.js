import React from 'react';

function Product(props){
    return (
        <div>
            <h3>Name : {props.product.name}</h3>
            <h3  >Price : {props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h3>
            <p style={{color: props.product.descritpion && "#888888"}} > Description : {props.product.descritpion}</p>
            <hr/>
        </div>
    )
}
export default Product