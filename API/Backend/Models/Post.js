const mongoose = require("mongoose")

const Post = mongoose.model('computers', {

    id: { type: Number },
    name: { type: String },
    phone: { type: Number },
    email: { type: String },

});

module.exports = Post;