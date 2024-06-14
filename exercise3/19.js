function myFunction(a) {
    const b =String(a).split('');
    const hasil = b.map(data=>Number(data));
    console.log(hasil);
    return
}


// Test Case
myFunction(10) // Expected [1,0]
myFunction(931) // Expected [9,3,1]
myFunction(193278) // Expected [1,9,3,2,7,8]