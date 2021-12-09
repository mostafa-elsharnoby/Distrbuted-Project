const express = require('express');
const Order = require('../models/orderModel.js');
const router = express.Router();
const {createOrder,getOrders,getOrderById} = require('../controller/order');
const { requireSignin, userMiddleware } = require('../common-middlewre/index.js');

/*=================== Create Order Api  ==================*/
router.post('/orders/create', requireSignin , userMiddleware , createOrder);

/*=================== Get Orders Api  ==================*/
router.get('/orders', requireSignin , userMiddleware , getOrders);

/*=================== Create Order Api  ==================*/
router.get('/:order_id', requireSignin , userMiddleware , getOrderById);

module.exports = router;