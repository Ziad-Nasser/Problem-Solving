/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let current = 0;
    let end = nums.length-1;
    while(current <= end) {
        let mid = current + Math.floor((end-current)/2);
        if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) return mid;
        else if(nums[mid + 1] > nums[mid]) current = mid + 1;
        else end = mid - 1;
    }
    return current
};