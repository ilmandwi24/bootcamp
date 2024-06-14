function myFunction(a, b) {
    if (a[b] == null || a[b] == undefined) return console.log(false);
    console.log(true)
    return
}


// Test Case
myFunction({ a: 1, b: 2, c: 3 }, 'b') // Expected true
myFunction({ x: 'a', y: null, z: 'c' }, 'y') // Expected false
myFunction({ x: 'a', b: 'b', z: undefined }, 'z') // Expected false