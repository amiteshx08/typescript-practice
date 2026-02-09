// Leetcode Intersection of two arrays

const intersectionArr = (nums1: number[], nums2: number[]):number[] => {
   const set1 = new Set(nums1)
   const result = new Set<number>()

   for(const num of nums2) {
    if (set1.has(num)) {
        result.add(num)
    }
   }

   return Array.from(result)
}

console.log(intersectionArr([4,9,5],[9,4,9,8,4]))
console.log(intersectionArr([1,2,2,1],[2,2]))