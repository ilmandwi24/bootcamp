function myFunction(a, n) {
    console.log(a[n-1])
    return
}


// Test Case
myFunction([1, 2, 3, 4, 5], 3) // Expected 3
myFunction([10, 9, 8, 7, 6], 5) // Expected 6
myFunction([7, 2, 1, 6, 3], 1) // Expected 7