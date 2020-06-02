const Supplies = require('../data/supplies');

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
    Supplies.update(req.params.idx, req.body);
    res.redirect('/supplies');
}

function edit(req, res) {
    res.render('/supplies/update', 
    {supply: Supplies.getOne(req.params.idx), 
        idx: req.params.idx}
    )}

function create(req, res) {
    Supplies.add(req.body);
    res.redirect('/supplies');
}

function index(req, res) {
    res.render('supplies/index', 
    {supplies: Supply.getAll()
    })
}

function show(req, res) {
    res.render('supplies/show', 
    { supply: Supplies.getOne(req.params.idx), 
        idx: req.params.idx})
}

function addSupply(req, res) {
    res.render('/supplies/new');
}

function deleteOne(req, res) {
    Supply.deleteOne(req.params.id);
    res.redirect('/supplies');
}
