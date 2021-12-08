import React, { useEffect } from 'react';
import Product from '../components/Product';
import Rating from '../components/Rating';
import data from '../data';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
    const dispatch = useDispatch()
    const productId = useParams().id
    console.log("id =",productId)
    const productDetails = useSelector((state) => state.productDetails)
    const { loading , error , product } = productDetails
    useEffect(() => {
        dispatch(detailsProduct(productId))
    } , [dispatch,productId])
    return (
        <div>
            {
            loading ? <LoadingBox></LoadingBox>
                : error ? <MessageBox varient="danger">{error}</MessageBox>
                    : <div>
                    <div className="row">
                        <div className="col-2">
                            <img className="large" src={product["product"].productPictures} alt={product["product"].name}></img>
                        </div>
                        <div className="col-1">
                            <ul>
                                <li>
                                    <h1>
                                        {product["product"].name}
                                    </h1>
                                </li>
                                {/* <li>
                                    <Rating Rating={product.rating} numReviews={product.numReviews}>
        
                                    </Rating>
                                </li> */}
                                <li>
                                    Price:${product["product"].price}
                                </li>
                                <li>
                                    Description:
                                    <p>{product["product"].description}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-1">
                            <div className="card card-body">
                                <ul>
                                    <li>
                                        <div className="row">
                                            <div>Price</div>
                                            <div className="price">${product["product"].price}</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div>Status</div>
                                            <div>
                                                {product["product"].quantity > 0 ? <span className="success">In Stock</span> :
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
            }

        </div>
        
    );
}

export default ProductScreen;