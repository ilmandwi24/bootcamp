function myFunction(a, b) {
    console.log({
        a:b
    })
    return
}


// Test Case
myFunction('a', 'b') // Expected {a:'b'}
myFunction('z', 'x') // Expected {z:'x'}
myFunction('b', 'w') // Expected {b:'w'}