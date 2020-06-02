const supplies = [
    {supply: 'tent', bought: false},
    {supply: 'stakes', bought: false},
    {supply: 'flashlight', bought: false},
    {supply: 'chairs', bought: false},
    {supply: 'matches', bought: false},
    {supply: 'lighter', bought: false},
    {supply: 'cooler', bought: false},
    {supply: 'water', bought: false}
]

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
