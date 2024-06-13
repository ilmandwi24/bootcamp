function operation(a1,a2,operator){
    const n1 = Number(a1);
    const n2 = Number(a2);
    switch (operator) {
        case 'add':
            console.log(n1+n2);
            break;
        case 'substract':
            console.log(n1-n2);
            break;
            case 'divide':
                if(n2===0) return console.log('undefined');
                console.log(n1/n2);
                break;
        case 'multiply':
            console.log(n1*n2);
            break;
                
        default:
            console.log("input invalid")
            break;
    }
}

operation("1","2","add");
operation("4","5","substract");
operation("6","3","divide");
operation("2","7","multiply");
operation("6","0","divide");