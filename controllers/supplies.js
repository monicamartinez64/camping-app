const Supply = require('../models/supply');

module.exports = {
    index,
    show,
    addSupply,
    create,
    delete: deleteOne,
    edit,
    update
}

function update(req, res) {
    req.body.bought === req.body.bought === 'on';
    Supply.update(req.params.id, req.body);
    res.redirect('/supplies');
}

function edit(req, res) {
    res.render('/supplies/update', 
    {supply: Supply.getOne(req.params.id)
    });
}

function deleteOne(req, res) {
    Supply.deleteOne(req.params.id);
    res.redirect('/supplies');
}

function create(req, res) {
    req.body.bought = false;
    Supply.create(req.body);
    res.redirect('/supplies');
}

function addSupply(req, res) {
    res.render('/supplies/new');
}

function index(req, res) {
    res.render('supplies/new', {
        supplies: Supply.getAll(),
    });
}

function show(req, res) {
    res.render('supplies/show', { supply: Supplies.getOne(req.params.idx), idx: req.params.idx})
}
