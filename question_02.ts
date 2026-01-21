// two sum

function twoSum(arr: number[], target: number): boolean{
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            let sum = arr[i]! + arr[j]!;
            if(sum === target) return true;
        }
    }
    return false;
}

twoSum([3,2,4,5], 9)