
const express = require('express');
const app = express();
const env = require('dotenv');  //env vars
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')
const orderRoutes = require('./routes/order')
const userRoutes = require('./src/routes/user')

/*MOSTAFA HUSSIEN AHMED ALI */
//const orderRouter = require('./routes/orderRouter')

//environment variable 
env.config();
//use middleware

//mongoDb Connection String
/*
mongodb+srv://root:<password>@cluster0.icqnq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
*/
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.icqnq.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('Database is connected');
});


// ========= Testing APIs ============= //
app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hello From Server'
    });
});

app.post('/data', (req, res, next) => {
    res.status(200).json({
        message: req.body
    });
});
// ========= Testing APIs ============= //

//if we won't use body-parser library => app.use(express.json());
app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/api', authRoutes); // to use the authentacation routes
app.use('/api', adminRoutes); // to use admin routes
app.use('/api', categoryRoutes); // to use category routes
app.use('/api', productRoutes); // to use product routes
app.use('/api', cartRoutes); // to use cart routes
app.use('/api', orderRoutes); // to use order routes
app.use('/api', userRoutes); // to use user routes


/*MOSTAFA HUSSIEN AHMED ALI */
//app.use('api/orders', orderRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});