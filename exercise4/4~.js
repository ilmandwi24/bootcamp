function inBox(data){
    let row = data.length;
    // console.log(row)
    let posisiBola = -1 ;
    let jumlahKolom ;
    for(i=0;i<row-1;i++){

        jumlahKolom = data[i].length;
        for(j=0;j<data[i].length;j++){
            if (data[i][j]=="*"){
                posisiBola =j;
            }
            // console.log(data[i][j])
        }
        if(i==0 && posisiBola != -1) posisiBola=-1;
    }
    // console.log(jumlahKolom)
    if (posisiBola == -1) return console.log(false);
        // console.log(jumlahKolom)
    if (posisiBola == 0 || posisiBola != jumlahKolom -1 ) return console.log(true);
    
}

inBox([
    "###",
    "#*#",
    "###"
]) // Expected true

inBox([
    "###",
    "#*#",
    "###"
]) // Expected true

inBox([
    "####",
    "#* #",
    "#  #",
    "####"
]) // Expected true

inBox([
    "*####",
    "# #",
    "#  #*",
    "####"
]) // Expected false

inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
]) // Expected false

inBox([
    "###",
    "# #",
    "###"
]) // Expected false

inBox([
    "####",
    "#  #",
    "#  #",
    "####"
]) // Expected false

inBox([
    "#####",
    "#   #",
    "#   #",
    "#   #",
    "#####"
]) // Expected false

inBox([
    "###",
    "#*#",
    "###"
]) // Expected true

inBox([
    "####",
    "# *#",
    "#  #",
    "####"
]) // Expected true

inBox([
    "#####",
    "#  *#",
    "#   #",
    "#   #",
    "#####"
]) // Expected true

inBox([
    "#####",
    "#   #",
    "# * #",
    "#   #",
    "#####"
]) // Expected true

inBox([
    "#####",
    "#   #",
    "#   #",
    "# * #",
    "#####"
]) // Expected true

inBox([
    "#####",
    "#*  #",
    "#   #",
    "#   #",
    "#####"
]) // Expected true