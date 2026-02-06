// Namaste Dev factorial of a number question

function factorial(n: number): number{
    if(n < 0 || !Number.isInteger(n) || Number.isNaN(n)) throw new Error('Invalid Input')

    if(n <= 1) return 1
    
    return factorial(n - 1) * n
}

console.log(factorial(3))
export {}