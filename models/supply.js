const Supplies = require('../data/supplies');

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

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


