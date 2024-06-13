function makeTitle(kalimat){
    let daftarKata = kalimat.split(" ");
   
    
   
    for (let i = 0; i < daftarKata.length; i++) {
        daftarKata[i] = daftarKata[i][0].toUpperCase() + daftarKata[i].substr(1);
    }

    // daftarKata.join(" ");
    console.log(daftarKata.join(" "))
    
    

}

// Example
makeTitle("This is a title") // Expected "This Is A Title"
// makeTitle("capitalize every word") // Expected "Capitalize Every Word"
// makeTitle("I Like Pizza") // Expected "I Like Pizza"
// makeTitle("PIZZA PIZZA PIZZA") // Expected "PIZZA PIZZA PIZZA"
// makeTitle("I am a title") // Expected "I Am A Title"
// makeTitle("I AM A TITLE") // Expected "I AM A TITLE"
// makeTitle("i aM a tITLE") // Expected "I AM A TITLE"
// makeTitle("the first letter of every word is capitalized") // Expected "The First Letter Of Every Word Is Capitalized"
// makeTitle("I Like Pizza") // Expected "I Like Pizza"
// makeTitle("Don't count your ChiCKens BeFore They HatCh") // Expected "Don't Count Your ChiCKens BeFore They HatCh"
// makeTitle("All generalizations are false, including this one") // Expected "All Generalizations Are False, Including This One"
// makeTitle("Me and my wife lived happily for twenty years and then we met.") // Expected "Me And My Wife Lived Happily For Twenty Years And Then We Met."
// makeTitle("There are no stupid questions, just stupid people.") // Expected "There Are No Stupid Questions, Just Stupid People."
// makeTitle("1f you c4n r34d 7h15, you r34lly n33d 2 g37 l41d") // Expected "1f You C4n R34d 7h15, You R34lly N33d 2 G37 L41d"