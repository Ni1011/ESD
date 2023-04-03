const mongoose = require('mongoose');

mongoose.set('strictQuery', true); // data for json
mongoose.connect('mongodb+srv://nitesh:nitesh@cluster0.zxm4nkd.mongodb.net/tcet', { useNewUrlParser: true, useUnifiedTopology: true, family: 4 }, (err) => {

    if (err) {

        console.log('Connection has ended with error' + err);
    } else {

        console.log('connection is successfull');
    }
});
// mongodb+srv://nitesh:nitesh@cluster0.zxm4nkd.mongodb.net/test

module.exports = mongoose; // export mongoose for use anywhere.