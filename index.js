const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./routes/student.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/", studentRoute);


app.get('/home', (req, res) => {
    res.send('Welcome to node js server');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/services', (req, res) => {
    res.send('Services Page');
});


const mongoURI = "mongodb+srv://admin:shafin@studentdb.hldvorr.mongodb.net/studentDB?appName=BackendDB";

mongoose.connect(mongoURI)
    .then(() => {
        console.log('MongoDB Connected Successfully');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Running on port 4000
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});