function myFunction(a, b) {
    console.log(a.concat(b))
    return
}


// Test Case
myFunction([1, 2, 3], [3, 4, 5]) // Expected [ 1, 2, 3, 4, 5 ]
myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]) // Expected [ -11, -10, 5, 22, 41,  42, 333]