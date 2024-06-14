function myFunction(a) {
    console.log(a.slice(0,3))
    return
}


// Test Case
myFunction([1, 2, 3, 4]) // Expected [1,2,3]
myFunction([5, 4, 3, 2, 1, 0]) // Expected [5,4,3]
myFunction([99, 1, 1]) // Expected [99,1,1]