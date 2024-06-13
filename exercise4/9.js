function getBudgets(data){
    let budget = 0;
    data.forEach(d => {
        budget += d.budget
    });
    console.log(budget)
}

// Example
getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]) // Expected 65700

getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
]) // Expected 62600

getBudgets([{ name: "John", age: 21, budget: 23000 }, { name: "Steve", age: 32, budget: 40000 }, { name: "Martin", age: 16, budget: 2700 }]) // Expected 65700)
getBudgets([{ name: "John", age: 21, budget: 29000 }, { name: "Steve", age: 32, budget: 32000 }, { name: "Martin", age: 16, budget: 1600 }]) // Expected 62600)
getBudgets([{ name: "John", age: 21, budget: 19401 }, { name: "Steve", age: 32, budget: 12321 }, { name: "Martin", age: 16, budget: 1204 }]) // Expected 32926)
getBudgets([{ name: "John", age: 21, budget: 10234 }, { name: "Steve", age: 32, budget: 21754 }, { name: "Martin", age: 16, budget: 4935 }]) // Expected 36923)
