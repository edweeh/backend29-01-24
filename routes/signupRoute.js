const app = require('express').Router()
const signupmodel = require("../model/Signup");

// signupRoute.js
app.get('/dnew', (request, response) => {
    new signupmodel(request.body).save();
    response.send("Record saved Successfully");
});

app.post('/snew', (request, response) => {
        new signupmodel(request.body).save();
        response.send("Record saved Successfully");
});





module.exports = app