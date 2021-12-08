import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import axios from "axios"
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useSelector , useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function HomeScreen(props) {
    const dispatch = useDispatch()
    const productList = useSelector((state) => state.productList)
    const { loading , error , products } = productList
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    
    return (
        <div>
            {
            loading ? <LoadingBox></LoadingBox>
                : error ? <MessageBox varient="danger">{error}</MessageBox>
                    : <div className="row center">
                        {
                            products.map((p) => (
                                <Product key={p._id} product={p}>
                                </Product>))
                        }
                    </div>
            }

        </div>
    );
}

export default HomeScreen;