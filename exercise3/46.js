function myFunction(obj) {
    if(obj["a"]==1) return console.log(undefined)
    obj["a"]?console.log(obj["a"]["b"]):console.log("undefined");
    // if(obj["a"]==undefined) return console.log("undefined");
    return
}


// Test Case
myFunction({ a: 1 }) // Expected undefined
myFunction({ a: { b: { c: 3 } } }) // Expected {c:3}
myFunction({ b: { a: 1 } }) // Expected undefined
myFunction({ a: { b: 2 } }) // Expected 2