function isSpecialArray(numbers) {
    let odd = 0;
    let even = 0;

    numbers.forEach(element => {
        if(element%2==0) return even++;
        odd++;
        return
    });

    if (even == odd) return console.log(true);
    console.log(false);
    return

}
isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) // Expected true, Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) // Expected false, Index 2 has an odd number 9.
isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) // Expected false, Index 3 has an even number 8.
isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) // Expected true
isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) // Expected false
isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) // Expected false
isSpecialArray([1, 1, 1, 2]) // Expected false
isSpecialArray([2, 2, 2, 2]) // Expected false
isSpecialArray([2, 1, 2, 1]) // Expected true
isSpecialArray([4, 5, 6, 7]) // Expected true
isSpecialArray([4, 5, 6, 7, 0, 5]) // Expected true