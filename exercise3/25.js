function myFunction(a, b) {

    
    const hasil = a.filter((data)=>{
        // console.log(data);
        return data !==b
    });
    console.log(hasil)



    return
}


// Test Case
myFunction([1, 2, 3], 2) // Expected [1, 3]
myFunction([1, 2, '2'], '2') // Expected [1, 2]
myFunction([false, '2', 1], false) // Expected ['2', 1]
myFunction([1, 2, '2', 1], 1) // Expected [2, '2']