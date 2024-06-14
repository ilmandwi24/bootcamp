function myFunction(arr) {
    let hasil = true;
    
    arr.forEach((item,index)=>{
        if (index ==0) {
            return ;
        }
        if(arr[0] != item) return hasil = false;

    });
    console.log(hasil)
    return
}


// Test Case
myFunction([true, true, true, true]) // Expected true 
myFunction(['test', 'test', 'test']) // Expected true 
myFunction([1, 1, 1, 2]) // Expected false 
myFunction(['10', 10, 10, 10]) // Expected false