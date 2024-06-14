function myFunction(obj) {
    console.log(obj.country)
    return
}


// Test Case
myFunction({ continent: 'Asia', country: 'Japan' }) // Expected 'Japan'
myFunction({ country: 'Sweden', continent: 'Europe' }) // Expected 'Sweden'