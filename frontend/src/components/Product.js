import React from 'react';
import Rating from './Rating';
export default function Product(props) {
    const { product } = props;
    console.log(product.productPictures[0]["img"])
    return (
        <div key={product._id} className="card">
            <a href={`/product/${product._id}`}>
                <img className="medium" src={`https://localhost:2000/public/${product.productPictures[0]["img"]}`} alt="product" />
                
            </a>
            <div className="card-body">
                <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </a>
                {/* <Rating rating={product.rating} numReviews={product.numReviews}>

                </Rating> */}
                <div className="price">${product.price}</div>
            </div>
        </div>
    );
}

