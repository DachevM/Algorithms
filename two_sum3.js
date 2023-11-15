const twoSum = (nums, target) => {
    const map = new Map()
    for (const item in nums) {
       map.set(nums[item], item)
    }
    for (const el in nums) {
        if(map.has(target - nums[el])){
            return [map.get(target - nums[el]), el]
        }
    }
  return []
};
