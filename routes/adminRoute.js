const app = require('express').Router()
const adminmodel = require("../model/Admin");

// signupRoute.js
app.get('/Anew', (request, response) => {
    new adminmodel(request.body).save();
    response.send("Record saved Successfully");
});

app.post('/tnew', (request, response) => {
        new adminmodel(request.body).save();
        response.send("Record saved Successfully");
});





module.exports = app