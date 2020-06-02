const Campsite = require('../models/campsite');
const Parks = require('../config/parks');
const axios = require('axios');

module.exports = {
    query,
    search
}

function query(req, res) {
    res.render('campsites/searchpage', {parks: null, user: req.user})
}

function search(req, res) {
    axios.get(`https://developer.nps.gov/api/v1/parks?api_key=${process.env.PARK_API_KEY}&statecode=${req.body.state}`)
    .then(response => {
        console.log(response.data)
        res.render('campsites/searchpage', {parks: response.data.data, user: req.user})
    })
}

// Need to set up a details page for the park (a link in the searchpage.ejs)
// When clicked, a user gets all the details about the park a button to add to their favorites
// Write a route for the button (inside the forEach loop) to pass the park into a controller function 
// Write the controller function to add the park to the database, referencing the user
function addPark(req, res) {
    req.body.user = req.user._id;
    const newPark = new Campsite(req.body);
    newPark.save(function(err) {
        res.redirect('/');
    })
}
function getParks(req, res) {
    Campsite.find({user: req.user._id}, function(err, parks) {
        res.render('campsites/index', {parks: parks, user: req.user})
    })
}
