function reverseWords(data){
    console.log(data.split(' ').filter(element => element !== '').reverse().join(' '));
}

reverseWords(" the sky is blue") // Expected "blue is sky the"
reverseWords("hello   world!  ") // Expected "world! hello"
reverseWords("a good example") // Expected "example good a"
reverseWords("hello world!") // Expected "world! hello")
reverseWords("blue is sky the") // Expected "the sky is blue")
reverseWords("a good example") // Expected "example good a")
reverseWords("fraud! of example another is this") // Expected "this is another example of fraud!")
reverseWords("man! the are You") // Expected "You are the man!")