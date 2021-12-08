import React from 'react';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom'
function CartScreen(props) {
    const productId = useParams().id
    const [searchParams, setSearchParams] = useSearchParams();

    const qty = searchParams.get('qty')
    console.log(qty)
    // console.log("before search\n")
    // const { search } = useLocation();
    // console.log("before URL\n")
    // const qtyInUrl = new URLSearchParams(search).get("qty");
    // console.log("QTY", qtyInUrl);
    // const qty = qtyInUrl ? Number(qtyInUrl) : 1;
    // const qty = props.location.serach ? Number(props.location.serach.split('=')[1]) : 1
    return (
        <div>
            <h1>CART SCREEN</h1>
            {<p>
                ADD TO CART: PRODUCTID: {productId} QTY: {qty}
            </p>}
        </div>
    );
}

export default CartScreen;