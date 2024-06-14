function myFunction(a) {
    console.log(a.slice(-7,-3));
    return
}


// Test Case
myFunction('abcdefg') // Expected 'abcd'
myFunction('1234') // Expected '1'
myFunction('fgedcba') // Expected 'fged'