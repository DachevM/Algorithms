const containsDuplicate = function(nums) {
    const obj = new Set(nums);
    return obj.size !== nums.length;
};
