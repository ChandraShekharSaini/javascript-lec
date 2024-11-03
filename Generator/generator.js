function* myGenerator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let itr = myGenerator()

console.log(itr.next().value)
console.log(itr.next().value)
console.log(itr.next().value)
console.log(itr.next().value)
console.log(itr.next().value)