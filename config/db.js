const { default: mongoose } = require("mongoose");


const db = async () => {
    try {
        await mongoose.connect('mongodb+srv://phpatelsd21:12345@cluster0.ps5b9fe.mongodb.net/books');
        console.log('CSuccessfully connected to the database!!');
    } catch (error) {
        console.log('Error connecting to the database:', error);
        
    }
}

module.exports = db;