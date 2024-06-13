function removeDups(data){
    let uniqueItems = [...new Set(data)];
    console.log(uniqueItems)
}

// Example
removeDups([1, 0, 1, 0]) // Expected [1, 0]
removeDups(["The", "big", "cat"]) // Expected ["The", "big", "cat"]
removeDups(["John", "Taylor", "John"]) // Expected ["John", "Taylor"]
removeDups(['John', 'Taylor', 'John', 'john']) // Expected ['John', 'Taylor', 'john']
removeDups(['javascript', 'python', 'python', 'ruby', 'javascript', 'c', 'ruby']) // Expected ['javascript', 'python', 'ruby', 'c']
removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5]) // Expected [1, 2, 3, 5, 6, 7]
removeDups(['#', '#', '%', '&', '#', '$', '&']) // Expected ['#', '%', '&', '$']
removeDups([3, 'Apple', 3, 'Orange', 'Apple']) // Expected [3, 'Apple', 'Orange']