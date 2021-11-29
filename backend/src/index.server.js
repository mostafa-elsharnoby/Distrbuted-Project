
const express = require('express');
const app = express();
const env = require('dotenv');  //env vars
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');


//environment variable 
env.config();
//use middleware
//if we won't use body-parser library => app.use(express.json());
app.use(bodyParser());


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
).then(()=> {
    console.log('Database is connected');
});


// ========= Testing APIs ============= //
app.get('/',(req,res,next) =>{
    res.status(200).json({
        message: 'Hello From Server'
    });
});

app.post('/data',(req,res,next) =>{
    res.status(200).json({
        message: req.body
    });
});
// ========= Testing APIs ============= //

app.use('/api',authRoutes); // to use the authentacation routes
app.use('/api',adminRoutes); // to use admin routes


app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
});