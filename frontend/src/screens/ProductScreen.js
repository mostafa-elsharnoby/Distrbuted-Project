import React from 'react';
import Product from '../components/Product';
import Rating from '../components/Rating';
import data from '../data';
import { useParams } from 'react-router';

function ProductScreen(props) {
    let { id } = useParams();
    const product = data.products.find((x) => x._id === id);

    console.log(product)
    if (!product) {
        return <div>PRODUCT NOT FOUND !</div>
    }
    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <img className="large" src={Product.productPictures} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>
                                {product.name}
                            </h1>
                        </li>
                        {/* <li>
                            <Rating Rating={product.rating} numReviews={product.numReviews}>

                            </Rating>
                        </li> */}
                        <li>
                            Price:${product.price}
                        </li>
                        <li>
                            Description:
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div>
                                        {product.quantity > 0 ? <span className="success">In Stock</span> :
                                            <span className="danger ">Out of Stock</span>}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductScreen;