const mongoose = require("mongoose");


const connectToDatabase = async () => {
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/NoteApp");
    console.log('MongoDB is connected')
    return connection   
}

module.exports = connectToDatabase