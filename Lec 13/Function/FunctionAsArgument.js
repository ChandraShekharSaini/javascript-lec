//Function can be pass as argument in javascript
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function operation(add, subtract) {
    console.log(add(12, 1))
    console.log(subtract(13, 1))
}

// operation(add, subtract)
operation(function add(a, b) {
    return a + b;
}, function subtract(a, b) {
    return a - b;
});