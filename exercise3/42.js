function myFunction(a) {s
    console.log({
        "key":a
    })
    return
}


// Test Case
myFunction('a') // Expected {key:'a'}
myFunction('z') // Expected {key:'z'}
myFunction('b') // Expected {key:'b'}