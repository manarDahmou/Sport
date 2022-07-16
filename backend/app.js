// import express module
const express = require('express');
// import body parser module
const bodyParser = require('body-parser');
// import bcrypt module
const bcrypt = require('bcrypt');
// import path module
const path = require('path');
// import multer module
const multer = require('multer');
// create express application
const app = express();

app.use('/images', express.static(path.join('backend/images')))

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sportDBOct');
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

// multer configuration
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storageConfig = multer.diskStorage({ 
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype]; 
        let error = new Error("Mime type is invalid"); 
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-'); 
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});


// Prepare Response to JSON Object to send to FE
app.use(bodyParser.json());
// Parse getted Body from FE to JSON Object
app.use(bodyParser.urlencoded({ extended: true }));
// import Match Model
const Match = require('./models/match');
const User = require('./models/user');

// Business Logic: Get ALL Matches
app.get("/matches", (req, res) => {
    Match.find((err, docs) => {
        if (err) {
            console.log('Error with DB');
        } else {
            res.status(200).json({
                matchesRes: docs
            })
        }
    });
});

// Business Logic: Get Match By ID
app.get("/matches/:id", (req, res) => {
    console.log('Here into get match by id', req.params.id);
    Match.findOne({ _id: req.params.id }).then(
        (result) => {
            if (result) {
                res.status(200).json({
                    findedMatch: result
                })
            }
        }
    )
});
// Business Logic: Delete Match By ID
app.delete('/matches/:id', (req, res) => {
    console.log('Here into delete match by id', req.params.id);
    Match.deleteOne({ _id: req.params.id }).then(
        (result) => {
            console.log('Result after delete', result);
            if (result) {
                res.status(200).json({
                    message: 'Deleted with success'
                })
            }
        });
});

// Business Logic: Add match object
app.post("/matches", (req, res) => {
    console.log('Here into add match', req.body);
    const match = new Match({
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo
    });
    match.save((err, result) => {
        console.log('Error', err);
        console.log('Result', result);
        if (result) {
            res.status(200).json({
                message: 'Added with success'
            });
        }
    });
});

// Business Logic: Edit match object
app.put("/matches/:id", (req, res) => {
    console.log('Here into edit match ID', req.params.id);
    console.log('Here into edit match OBJECT', req.body);
    Match.updateOne({ _id: req.params.id }, req.body).then(
        (result) => {
            console.log('Result after update', result);
            if (result) {
                res.status(200).json({
                    message: 'Updated with success'
                });
            }
        });
});

// Business Logic: Signup
app.post('/users/signup',multer({ storage: storageConfig }).single('img'), (req, res) => {
    bcrypt.hash(req.body.pwd, 10).then(
        (cryptedPwd) => {
            let url = req.protocol + '://' + req.get('host');
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                pwd: cryptedPwd,
                img: url + '/images/' + req.file.filename
            });
            user.save((err, result) => {
                if (err) {
                    console.log('Error', err);
                } else {
                    res.status(200).json({
                        message: 'User added with success'
                    })
                }
            })
        }
    )
});

// Business Logic: Login
app.post('/users/login', (req, res) => {
    console.log('Here into Login', req.body);
    User.findOne({ email: req.body.email }).then(
        (emailResult) => {
            console.log('Email Result', emailResult);
            if (!emailResult) {
                res.status(200).json({
                    msg: '0'
                })
            }
            return bcrypt.compare(req.body.pwd, emailResult.pwd)
        }).then(
            (pwdResult) => {
                console.log('pwdResult', pwdResult);
                if (!pwdResult) {
                    res.status(200).json({
                        msg: '1'
                    })
                }
                User.findOne({ email: req.body.email }).then(
                    (finalResult) => {
                        let userToSend = {
                            id:finalResult._id,
                            fName: finalResult.firstName,
                            lName: finalResult.lastName
                        }
                        console.log('User to send', userToSend);
                        res.status(200).json({
                            message: '2',
                            userToSend: userToSend
                        })
                    }
                )
            }
        )
});

app.get('/users/find/:id', (req,res)=> {
    User.findOne({_id: req.params.id}).then(
        (findedUser)=> {
            res.status(200).json({
                findedUser:findedUser
            })
        }
    )
})

// can import app 
module.exports = app;