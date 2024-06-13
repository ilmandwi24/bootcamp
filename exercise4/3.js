const abjad = "abcdefghijklmnopqrstuvwxyz".split("");

function getJumlahKata(data){
    let hasil = 0;

    data.forEach(element => {
        
        
        hasil += abjad.indexOf(element) + 1; 
    });
    return hasil
}

function balanced(kata){
    const jumlahKata = kata.length + 1;
    // console.log(jumlahKata)
    
    let kataKiri ;
    let kataKanan;
    if(kata.length % 2 ==0) {
        kataKiri = kata.slice(0,kata.length/2).split('');
        kataKanan = kata.slice(kata.length/2).split('');
    } else {
        
        kataKiri = kata.slice(0,Math.floor(kata.length/2)).split('');
        kataKanan = kata.slice((kata.length/2)+1).split('');
    }
    let nilaiKataKiri = getJumlahKata(kataKiri);
    let nilaiKataKanan = getJumlahKata(kataKanan);

    if(nilaiKataKanan==nilaiKataKiri) return console.log(true);
    return console.log(false);
    
}// Example
balanced("zips") // expected true, "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true
balanced("brake") // expected false, "brake" = "br|ke" = 2+18|11+5 = 20|16 = false
balanced('at') // expected false
balanced('forgetful') // expected false
balanced('vegetation') // expected true
balanced('disillusioned') // expected false
balanced('abstract') // expected true
balanced('clever') // expected false
balanced('conditionalities') // expected true
balanced('seasoning') // expected true
balanced('uptight') // expected false
balanced('ticket') // expected false
balanced('calculate') // expected false
balanced('measure') // expected false
balanced('join') // expected false
balanced('anesthesiologies') // expected true
balanced('command') // expected false
balanced('graphite') // expected true
balanced('quadratically') // expected true
balanced('right') // expected false
balanced('fossil') // expected true
balanced('sparkling') // expected false
balanced('dolphin') // expected true
balanced('baseball') // expected true
balanced('immense') // expected false
balanced('pattern') // expected true
balanced('hand') // expected false
balanced('radar') // expected true
balanced('oven') // expected false
balanced('immutability') // expected true
balanced('kayak') // expected true
balanced('bartender') // expected true
balanced('weight') // expected false
balanced('lightbulbs') // expected true
balanced('tail') // expected true


