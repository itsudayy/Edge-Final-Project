const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api/products", productRoute);


mongoose.connect("mongodb+srv://admin:shafin@backenddb.hldvorr.mongodb.net/?appName=BackendDB")
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


app.get('/', (req, res) => {
    res.send('Hello from crud api');
});


