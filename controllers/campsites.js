const Campsite = require('../models/campsite');
const Parks = require('../config/parks');
const axios = require('axios');
const mongoose = require('mongoose');

module.exports = {
    query,
    search,
    show,
    create,
    getParks,
    delete: deletePark,
}

function query(req, res) {
    res.render('campsites/searchpage', {parks: null, user: req.user})
}

function search(req, res) {
    axios.get(`https://developer.nps.gov/api/v1/parks?api_key=${process.env.PARK_API_KEY}&statecode=${req.body.state}`)
    .then(response => {
        res.render('campsites/searchpage', {parks: response.data.data, user: req.user})
    })
}

function show(req, res) {
    axios.get(`https://developer.nps.gov/api/v1/parks?api_key=${process.env.PARK_API_KEY}&parkCode=${req.params.parkCode}`)
    .then(response => {
        res.render('campsites/parkDetails', {park: response.data.data[0], user: req.user})
    })
}

function create(req, res) {
    req.body.user = req.user._id;
    const newPark = new Campsite(req.body);
    newPark.save(function(err) {
        res.redirect('/campsites');
    })
}

function getParks(req, res) {
    Campsite.find({user: req.user._id}, function(err, parks) {
        res.render('campsites', {parks, user: req.user})
    })
}

function deletePark(req, res) {
    Campsite.findByIdAndDelete(req.params.id, function(err){
        res.redirect('/campsites')
    })
    console.log(deletePark);
}
