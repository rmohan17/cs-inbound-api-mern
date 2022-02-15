const mongoose = require("mongoose");
const coldInfoSchema = new mongoose.Schema({
    submitterId: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,

        index: true
    },
    name: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,

        index: true
    },
    owner: {
        type: String,
        required: true,
        minlength: 8,
        index: true,
        trim: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
        minlength: 8,
        index: true,
        trim: true,

    },
    facebookUrl: {
        type: String, 
        required: true,

    }
},
    { collection: "coldInfo" }

);

module.exports = mongoose.model("coldInfo", coldInfoSchema);
