function myFunction(a) {
    console.log(typeof(a))
    return
}


// Test Case
myFunction(1) // Expected 'number'
myFunction(false) // Expected 'boolean'
myFunction({}) // Expected 'object'
myFunction(null) // Expected 'object'
myFunction('string') // Expected 'string'
myFunction(['array']) // Expected 'object'