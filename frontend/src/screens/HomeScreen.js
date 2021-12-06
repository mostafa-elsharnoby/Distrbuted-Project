import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import axios from "axios"
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';

function HomeScreen(props) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('api/product/getproducts');
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [])
    console.log(products)
    // const myProducts = []
    // for (let p in products) {
    //     myProducts.push(p)
    // }

    const myProducts = JSON.parse(products);
    console.log(myProducts)
    return (
        <div>
            {loading ? <LoadingBox></LoadingBox>
                : error ? <MessageBox varient="danger">{error}</MessageBox>
                    : <div className="row center">
                        {
                            myProducts.map((p) => (
                                <Product key={p._id} product={p}>
                                </Product>))
                        }
                    </div>
            }

        </div>
    );
}

export default HomeScreen;