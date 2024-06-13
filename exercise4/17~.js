function calculateScore(a,b){
    switch (a) {
        case "R":
            switch (b) {
                case "R":
                    return "draw"
                    break;
                case "P":
                    return "draw"
                    break;
                default:
                    break;
            }
            break;
    
        default:
            break;
    }
}