function myIterator(start = 0, end = Infinity, step = 1) {
    let startIndex = start;
    let iterationCount = 0;

    return {
        next() {
            let result;
            while (startIndex < end) {
                result = { value: startIndex, done: false }

                startIndex += step;
                iterationCount++;
                return result
            }

            return { value: iterationCount, done: true }
        }
    }
}

let itr = myIterator(0, 10, 2);
let result = itr.next();

while (!result.done) {
    console.log(result.value)
    result = itr.next()
}