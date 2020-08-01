const User = require('../models/user');

module.exports = {
    create,
    index,
    getSupplies,
    edit,
    update,
    delete: deleteOne
}

function create(req, res) {
    User.findById(req.user.id, function(err, user) {
        user.supplies.push(req.body);
        user.save(function(err) {
            res.redirect('/supplies');
        });
    })    
}

function index(req, res) {
    res.render('supplies/index', 
    {user : req.user
    })
}

function getSupplies(req, res) {
    User.findById(req.user.id, function(err, user) {
        res.render('supplies', {supplies: user.supplies, user: req.user})
    })
}

function edit(req, res) {
    User.findById(req.user.id, function(err, user){
        let supply = user.supplies.id(req.params.id);
        res.render('supplies/supplydetails', {supply, user: req.user})
    })
}

function update(req, res) {
    User.findById(req.user.id, req.body, function() {
        let supply = user.supplies.id(req.params.id);
        
        // req.user.supplies.splice(req.params.idx, 1, req.body);
        req.user.save(function(err) {
        res.redirect('/supplies');    
        }) 
        console.log(update);
    })
}

function deleteOne(req, res) {
    User.findById(req.user.id, function(err){
        user.supplies.id(req.params.id).remove();
        // req.user.supplies.splice(req.params.idx, 1);
        req.user.save(function(err) {
            res.redirect('/supplies');    
        }) 
    })
}

