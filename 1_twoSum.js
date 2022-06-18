var twoSum = function(nums, target) {
  let map = new Map()
  
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [i, map.get(target - nums[i])]
    } else {
      map.set(nums[i], i)
    }
  }

  throw new Error('illegal')
}

console.log(twoSum([3,2,4], 6))