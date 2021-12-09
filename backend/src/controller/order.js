const Order = require('../models/orderModel.js');

exports.createOrder = (req,res) => {
    if (req.body.orderItems.length === 0) {
        res.status(400).send({ message: 'Cart is empty' });
    } else {
        const order = new Order({
            //seller: req.body.orderItems[0].seller,
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            paymentMethod: req.body.paymentMethod,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            taxPrice: req.body.taxPrice,
            totalPrice: req.body.totalPrice,
            user: req.user._id,
        });
        order.save((error,data) => {
            if(error){
                return res.status(400).json({
                    message:'something went wrong'
                });
            }
            if(data){
                return res.status(201).json({
                    message: 'Order created successfully',
                    data
                })
            }
        })
    }
}

exports.getOrderById = (req,res) => {
    const { order_id } = req.params
    Order.findById(order_id , (error,order) => {
        if(error) return res.status(400).json({ error })
        if(order){
            res.status(200).json({order})
        }
    })
}

exports.getOrders = (req,res) => {
    Order.find({}).exec((error, orders) => {
        if (error) return res.status(400).json({ error });
        if (orders) {
          res.status(200).json({orders});
        }
      });
}