const mongoose = require("mongoose");
const coldInfoSchema = new mongoose.Schema({
        submitterId: {
            type: String,
            require: true,
            minLength: 8,
            index: true,
        },
        name: {
            type: String,
            require: true,
            minLength: 2,
            index: true,
        },
        owner: {
            type: String,
            require: true,
            minLength: 1,
            trim: true,
            index: true,
        },
        address: {
            type: String,
            minLength: 1,
            require: true,
            trim: true,
            index: true,
        },
        contact: {
            type: Number,
            require: true,
        },
        facebookUrl: {
            type: String,
            require: false,
        }
    });
module.exports = mongoose.model("coldInfo", coldInfoSchema);
