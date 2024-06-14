function myFunction(x, y) {
   
    console.log(Object.assign(x,y))
    return
}


// Test Case
myFunction({ a: 1, b: 2 }, { c: 3, d: 4, e: 5 }) // Expected { a: 1, b: 2, c: 3, e: 5, d: 4}
myFunction({ a: 5, b: 4 }, { c: 3, d: 1, e: 2 }) // Expected { a: 5, b: 4, c: 3, e: 2, d: 1}