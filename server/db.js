const mongoose = require('mongoose')

//URL for mongoDB Connection
const mongoURL = '';

//Function to connect to mongoDB
const connectToMongo = async () => {
    mongoose.connect(mongoURL, ()=>{
        console.log("Connected to mongo Successfully")
    }).catch((err)=>console.log("No Connection"));
}

module.exports = connectToMongo;