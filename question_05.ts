// Leetcode 561. Array Partition

function arrayPairSum(nums: number[]): number{
    nums.sort((a: number, b: number) => a - b)
    let sum = 0
    for(let i = 0; i < nums.length; i++) {
        if(i % 2 === 0) sum += nums[i]!
    }
    return sum
}

console.log(arrayPairSum([1,4,3,2]))
console.log(arrayPairSum([6,2,6,5,1,2]))