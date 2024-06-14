function myFunction(a) {
    if(a % 1 ==0) return console.log(true)
    console.log(false)
    return
}


// Test Case
myFunction(4) // Expected true 
myFunction(1.123) // Expected false 
myFunction(1048) // Expected true 
myFunction(10.48) // Expected false 