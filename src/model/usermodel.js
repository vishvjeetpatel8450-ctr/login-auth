const mongoose = require("mongoose");

const connectDB = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("User", connectDB);