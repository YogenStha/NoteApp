const mongoose = require("mongoose");


const connectToDatabase = async () => {
    const connection = await mongoose.connect("mongodb+srv://yogenstha520_db_user:cdgjslWrLtE8zRnn@noteapp.p99uakr.mongodb.net/?appName=NoteApp");
    console.log('MongoDB is connected')
    return connection   
}

module.exports = connectToDatabase