const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const route = require('./routers/donationRoute');
const memberroute = require('./routers/memberRoute');
const expenseroute = require('./routers/expenseRoute');
const userroute = require('./routers/userRoute');
const cors = require('cors');


const app = express();
app.use(bodyparser.json());
dotenv.config();
app.use(cors());
const PORT = process.env.PORT || 3000;
const DBURL = process.env.DBURL;

mongoose.connect(DBURL).then(()=>{
    console.log("DB Connected Successfully");
    app.listen(PORT, ()=>{
        console.log("Server is running on port :"+ PORT);
    })
})
.catch(error => console.log(error));
app.use('/avatar',express.static('uploads'))
app.use("/api/",route);
app.use('/api/',expenseroute);
app.use('/api/',memberroute);
app.use('/api/',userroute);