function myFunction(a, b) {
    let hasil = 0;
    let arrayKata = b.split('');
    arrayKata.forEach((el)=>{
        if(a==el)hasil++;
        // hasil++;
    })
    console.log(hasil);
    return
}

// Test Case
myFunction('m', 'how many times does the character occur in this sentence?') // Expected 2
myFunction('h', 'how many times does the character occur in this sentence?') // Expected 4
myFunction('?', 'how many times does the character occur in this sentence?') // Expected 1
myFunction('z', 'how many times does the character occur in this sentence?') // Expected 0