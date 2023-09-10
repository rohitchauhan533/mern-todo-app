const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();

// routes
const todo = require("./routes/todo");
connectDB();

// initialize middleware

app.use(express.json({extended: false}));
app.get("/", (req, res) => {
    res.send("Server up and running")
});

// use routes
app.use("/api/todo", todo);


// setting up port 
const  PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{
    console.log(`server is running on http://localhost:${PORT}`);
})