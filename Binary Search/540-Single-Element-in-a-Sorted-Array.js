/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        let mid = (left + right) >>> 1;
        if (mid % 2 !== 0) mid--;
        const value = nums[mid];
        if (value !== nums[mid + 1] && 
            value !== nums[mid - 1]) {
            return value;
        }
        if (value === nums[mid - 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
};