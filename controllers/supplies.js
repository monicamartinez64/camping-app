const Supply = require('../models/supplies');

module.exports = {
    create,
    index,
    getSupplies
}

function create(req, res) {
    // req.body.user = req.user.id;
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


// function getParks(req, res) {
//     Campsite.find({user: req.user._id}, function(err, parks) {
//         res.render('campsites', {parks, user: req.user})
//     })
// }

// function update(req, res) {
//     Supplies.update(req.params.idx, req.body);
//     res.redirect('/supplies');
// }

// function edit(req, res) {
//     res.render('/supplies/update', 
//     {supply: Supplies.getOne(req.params.idx), 
//         idx: req.params.idx}
//     )}

// function show(req, res) {
//     res.render('supplies/show', 
//     { supply: Supplies.getOne(req.params.idx), 
//         idx: req.params.idx})
// }

// function addSupply(req, res) {
//     res.render('/supplies/new');
// }

// function deleteOne(req, res) {
//     Supply.deleteOne(req.params.id);
//     res.redirect('/supplies');
// }