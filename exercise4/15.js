function play(data){
    let a = data[0];
    let b = data[1];
    // console.log(a,b,"---")
    switch (a) {
        case "R":
            switch (b) {
                case "R":
                    return "Draw";
                    break;
                case "P":
                    return "B";
                    break;
                case "S":
                    return "A";
                    break;
                default:
                    console.log("false input");
                    break;
            }
            break;
        case "P":
            switch (b) {
                case "P":
                    return "Draw"
                    break;
                case "R":
                    return "A"
                    break;
                case "S":
                    return "B"
                    break;
                default:
                    console.log("false input");
                    break;
            }
            break;
        case "S":
            switch (b) {
                case "S":
                    return "Draw"
                    break;
                case "R":
                    return "B"
                    break;
                case "P":
                    return "A"
                    break;
                default:
                    console.log("false input");
                    break;
            }
            break;
    
        default:
            break;
    }
}

function calculateScore(data){
    let abigail = 0;
    let benson = 0;
    data.forEach(element => {
        const hasil = play(element);
        if(hasil=="A") return abigail++;
        if(hasil=="B") return benson++;
        
    });
    console.log(abigail,benson);
    if(abigail > benson) return console.log("Abigail");
    if(abigail < benson) return console.log("Benson");
    return console.log("Tie");
}

calculateScore([["R", "R"], ["S", "S"]]) // Expected "Tie"
calculateScore([["S", "R"], ["R", "S"], ["R", "R"]]) // Expected "Tie"
calculateScore([['R', 'P'], ['R', 'S'], ['S', 'P']]) // Expected  "Abigail"
calculateScore([['R', 'R'], ['S', 'S']]) // Expected "Tie"
calculateScore([['S', 'R'], ['R', 'S'], ['R', 'R']]) // Expected "Tie"
calculateScore([['S', 'R'], ['P', 'R']]) // Expected "Tie"
calculateScore([['S', 'S'], ['S', 'P'], ['R', 'S'], ['S', 'R'], ['R', 'R']]) // Expected "Abigail"
calculateScore([['S', 'R'], ['S', 'R'], ['S', 'R'], ['R', 'S'], ['R', 'S']]) // Expected "Benson"
