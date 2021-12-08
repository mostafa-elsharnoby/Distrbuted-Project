import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import Rating from '../components/Rating';
import data from '../data';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions/productActions';
import { createSearchParams, useNavigate } from "react-router-dom";

function ProductScreen(props) {
    const dispatch = useDispatch()
    const productId = useParams().id
    const [qty, setQty] = useState(1);
    console.log("id =", productId)
    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails
    useEffect(() => {
        dispatch(detailsProduct(productId))
    }, [dispatch, productId])


    let navigate = useNavigate();
    const params = { qty: `${qty}` };
    const addToCartHandler = () => {
        navigate({
            pathname: `/cart/${productId}`,
            search: `?${createSearchParams(params)}`,
        })

    };

    // console.log(product.quantity)
    return (
        <div>
            {
                loading ? <LoadingBox></LoadingBox>
                    : error ? <MessageBox varient="danger">{error}</MessageBox>
                        : <div>
                            <div className="row">
                                <div className="col-2">
                                    <img className="large" src={`/public/${product["product"].productPictures[0]}`} alt={product["product"].name}></img>
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

                                            {product["product"].quantity > 0 && (
                                                <>
                                                    <li>
                                                        <div className="row">
                                                            <div>Qty</div>
                                                            <div>
                                                                <select
                                                                    value={qty}
                                                                    onChange={(e) => setQty(e.target.value)}
                                                                >
                                                                    {[...Array(product["product"].quantity).keys()].map(
                                                                        (x) => (
                                                                            <option key={x + 1} value={x + 1}>
                                                                                {x + 1}
                                                                            </option>
                                                                        )
                                                                    )}
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button
                                                            onClick={addToCartHandler}
                                                            className="primary block"
                                                        >
                                                            Add to Cart
                                                        </button>
                                                    </li>
                                                </>
                                            )}

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