const supplies = [];

module.exports = {
    getAll,
    getOne,
    deleteOne,
    add,
    update
}

function update(idx, supply) {
    supplies[idx] = supply;
}

function add(supply) {
    supplies.push(supply);
}

function getAll() {
    return supplies;
}

function getOne(idx) {
    return supplies[idx];
}

function deleteOne(idx) {
    supplies.splice(idx, 1);
}
