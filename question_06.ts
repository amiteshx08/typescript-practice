//Namaste Dev Find largest number

const findLargest = (arr: number[]):number | boolean | null=> {
    if(!Array.isArray(arr)) return false
    if(arr.length === 0) return null
    
    let mx;

    for(let i = 0; i < arr.length; i++) {
        const v = arr[i]

        if(typeof v !== 'number' || !isFinite(v)) return false
        if(mx === undefined || v > mx) mx = v

    }
    return mx!;
}

console.log(findLargest([3,1,2]))
console.log(findLargest([-5,2,-3,4]))
console.log(findLargest([0,2,3]))
console.log(findLargest([]))