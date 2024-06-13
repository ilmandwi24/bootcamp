function missingNum(daftarAngka){
   
      
    for (let i = 1; i <= 10; i++) {
        let skip = false;
        daftarAngka.forEach(element => {
                if(i==element) {
                    skip = true;
                   
                }
        });
        if(skip == false) console.log(i);
    }
    
}
missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) // Expected 5
missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) // Expected 10
missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) // Expected 7
missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) // Expected 5
missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) // Expected 10
missingNum([7, 2, 3, 9, 4, 5, 6, 8, 10]) // Expected 1
missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) // Expected 7
missingNum([1, 7, 2, 4, 8, 10, 5, 6, 9]) // Expected 3