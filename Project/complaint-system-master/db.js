const mongoose = require('mongoose')

function connect() {
    mongoose.set('useCreateIndex', true);
    // mongoose.connect('mongodb://localhost/complaintapp',{useNewUrlParser: true})
    mongoose.connect('mongodb+srv://nitesh:nitesh@cluster0.zxm4nkd.mongodb.net/complaintapp', { useNewUrlParser: true })

}

module.exports = connect