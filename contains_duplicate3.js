const containsDuplicate = function(nums) {
    const set = new Set()
    for (let item of nums) {
        if (set.has(item)){
            return true
        } else {
            set.add(item)
        }
    }
    return false
};
