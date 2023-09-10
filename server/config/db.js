const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.MONGO_URI;
console.log(db);
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            //userNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;