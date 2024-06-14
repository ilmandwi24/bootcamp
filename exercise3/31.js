function myFunction(arr) {
    let hasil = 0;
    arr.forEach(a=>{
        hasil+=a;
    })
    console.log(hasil/arr.length);
    return
}


// Test Case
myFunction([10, 100, 40]) // Expected 50
myFunction([10, 100, 1000]) // Expected 370
myFunction([-50, 0, 50, 200]) // Expected 50