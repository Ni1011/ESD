const express = require('express');
const req = require('express/lib/request');
const router = express.Router(); // router under express

const mongoType = require('mongoose').Types; // define mongoose types

const Post = require('../Backend/Models/post.js'); //path of post,js file

// routes define here
//get All data from this api

router.get('/', (req, res) => {
    Post.find((err, doc) => { //request for data Post

        if (err) {

            console.log("Error Occures While fetching Data", +err);
            res.status(400).send("Internal Error", err);
        } else {

            res.send(doc);
        }
    })
})

// create new post for insert data
router.post('/', (req, res) => {

    let post = new Post({
        id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,

    })

    post.save((err, doc) => {

        if (err) {
            console.log("inernal error:" + err);
            res.status(400).send("Inernal Error:" + err)

        } else {

            res.send(doc)
        }
    })

})

//get Data by id

router.get('/:id', (req, res) => {

    if (mongoType.ObjectId.isValid(req.params.id)) {
        Post.findById(req.params.id, (err, doc) => {

            if (err) {
                console.log("Internal Error:" + err);
                res.status(400).send('Inernal Error:' + err);
            } else {
                res.send(doc);
            }
        })
    } else {

        res.status(400).send('No record found by this Id' + id);
    }
})

//delete Data by id

router.delete('/:id', (req, res) => {

    if (mongoType.ObjectId.isValid(req.params.id)) {
        Post.findByIdAndRemove(req.params.id, (err, doc) => {

            if (err) {
                console.log("Internal Error:" + err);
                res.status(400).send('Inernal Error:' + err);
            } else {
                res.send(doc);
            }
        })
    } else {

        res.status(400).send('No record found by this Id' + id);
    }
})

//update Data by id

router.put('/:id', (req, res) => {

    let post = {
        id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,

    }

    if (mongoType.ObjectId.isValid(req.params.id)) {
        Post.findByIdAndUpdate(req.params.id, { $set: post }, { new: true }, (err, doc) => {

            if (err) {
                console.log("Internal Error:" + err);
                res.status(400).send('Inernal Error:' + err);
            } else {
                res.send(doc);
            }
        })
    } else {

        res.status(400).send('No record found by this Id' + id);
    }
})

module.exports = router;