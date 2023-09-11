const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName: {
        type: "String",
        required: true,
    },

    emailId: {
        type: "String",
        required: true,
    }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;