// Defining a generator function
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
    return 'done';
  }
  
  // Using the generator
  const gen = myGenerator();
  
  console.log(gen.next()); // { value: 1, done: false }
  console.log(gen.next()); // { value: 2, done: false }
  console.log(gen.next()); // { value: 3, done: false }
  console.log(gen.next()); // { value: 'done', done: true }