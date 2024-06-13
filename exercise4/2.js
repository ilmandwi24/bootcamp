function numInStr(data) {
    const hasil = [];
    data.forEach(d => {
        
        d.split().forEach((huruf)=>{
            const mengandungAngka = containsNumber(huruf);
            // console.log(huruf,"%%")
            // console.log(mengandungAngka)
            if(mengandungAngka==true) hasil.push(huruf) 
        })
    });

    console.log(hasil)
}

// Example
numInStr(["1a", "a", "2b", "b"]) // expected ["1a", "2b"]
numInStr(["abc", "abc10"]) // expected ["abc10"]
numInStr(["abc", "ab10c", "a10bc", "bcd"]) // expected ["ab10c", "a10bc"]
numInStr(["this is a test", "test1"]) // expected ["test1"]
numInStr(['abc', 'ab10c', 'a10bc', 'bcd']) // expected ['ab10c', 'a10bc']
numInStr(['1', 'a', ' ', 'b']) // expected ['1']
numInStr(['rct', 'ABC', 'Test', 'xYz']) // expected []
numInStr(['this IS', '10xYZ', 'xy2K77', 'Z1K2W0', 'xYz']) // expected ['10xYZ', 'xy2K77', 'Z1K2W0']
numInStr(['-/>', '10bc', 'abc ']) // expected ['10bc']

function containsNumber(str) {
    for (let i = 0; i < str.length; i++) {
        // console.log(str.charAt(i));
        // console.log(str.charAt(i)== ' ', "000")
        if (str.charAt(i)== ' ') continue;         //if the string is a number, do the following
        if (!isNaN(str.charAt(i)) ) {  
            return true;
        }
        
    }
}
