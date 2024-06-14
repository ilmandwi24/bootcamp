function myFunction(obj, key) {
    console.log(obj[key])
    return
}


// Test Case
myFunction({ continent: 'Asia', country: 'Japan' }, 'continent') //Expected 'Asia'
myFunction({ country: 'Sweden', continent: 'Europe' }, 'country') // Expected 'Sweden'