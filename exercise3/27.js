function myFunction(arr) {
    let hasil = 0;
    arr.forEach(el => {
        if(el < 0 ) hasil++;
    })
    console.log(hasil)
    return
}


// Test Case
myFunction([1, -2, 2, -4]) // Expected 2
myFunction([0, 9, 1]) // Expected 0
myFunction([4, -3, 2, 1, 0]) // Expected 1