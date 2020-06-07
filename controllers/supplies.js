const Supply = require('../models/supplies');

module.exports = {
    create,
    index,
    getSupplies,
    edit,
    getSupplyDetails,
    update,
    delete: deleteOne
}

function create(req, res) {
    const newSupply = new Supply(req.body);
    newSupply.save(function(err) {
        res.redirect('/supplies');    
    })
}

function index(req, res) {
    res.render('supplies/index', 
    {user : req.user
    })
}

function getSupplies(req, res) {
    Supply.find({}, function(err, supplies) {
        res.render('supplies', {supplies, user: req.user})
    })
}

function edit(req, res) {
    Supply.findById(req.params.id, function(err, supplies){
    res.render('supplies/supplydetails', {supplies, user: req.user})
    })
}

function getSupplyDetails(req, res) {
    res.render('supplies/supplydetails', {supplies, user: req.user})
}

function update(req, res) {
    Supply.findByIdAndUpdate (req.params.id, req.body, {new: true}, function() {
        Supply.save;
        res.redirect('/supplies');
        console.log(update);
    })
}

function deleteOne(req, res) {
    Supply.findByIdAndDelete(req.params.id, function(err){
        res.redirect('/supplies');
    })
}