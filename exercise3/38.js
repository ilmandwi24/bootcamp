function myFunction(obj) {
    console.log(obj["prop-2"])
    return
}


// Test Case
myFunction({ one: 1, 'prop-2': 2 }) // Expected 2
myFunction({ 'prop-2': 'two', prop: 'test' }) // Expected 'two'