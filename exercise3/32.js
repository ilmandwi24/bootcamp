function myFunction(arr) {
    let hasil = "";
    arr.forEach(a=>{
        if(hasil.length<a.length){
            hasil = a
        }
    })
    console.log(hasil)
    return
}


// Test Case
myFunction(['help', 'me']) // Expected 'help'
myFunction(['I', 'need', 'candy']) // Expected 'candy'