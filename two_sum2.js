const twoSum = (nums, target) => {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = i
    }
    for (let j = 0; j < nums.length; j++) {
    const n = nums[j]
        if(obj[target - n]){
            return [obj[target - n], j]
        }
        }
    return []
};

