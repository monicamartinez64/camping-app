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
    {user : req.user
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


//Other Functions
function update(id, supply) {
    const idx = supplies.findIndex(supply => supply.id === parseInt(id));
    supply.id = parseInt(id);
    supplies.splice(idx, 1, supply);
  }
  
  function deleteOne(id) {
    const idx = supplies.findIndex(supply => supply.id === parseInt(id));
    supplies.splice(idx, 1);
  }
  
  function create(supply) {
    supply.done = false;
    supplies.push(supply);
  }
  
  function getOne(id) {
    return supplies.find(supply => supply.id === parseInt(id));
  }
  
  function getAll() {
    return supplies;
  }
