function awardPrizes(data){
    let result = Object.keys(data).map((key) => [key, data[key]]);
    console.log(result)

}

awardPrizes({
    'Person A': 1,
    'Person B': 2,
    'Person C': 3,
    'Person D': 4,
    'Person E': 102
})