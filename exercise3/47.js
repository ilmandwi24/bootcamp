function myFunction(a) {
    let hasil = 0;
    for (const prop in a) {
        hasil+=a[prop]
        // console.log(`obj.${prop} = ${a[prop]}`);
    }
    console.log(hasil)
    return
}


// Test Case
myFunction({ a: 1, b: 2, c: 3 }) // Expected 6
myFunction({ j: 9, i: 2, x: 3, z: 4 }) // Expected 18
myFunction({ w: 15, x: 22, y: 13 }) // Expected 50