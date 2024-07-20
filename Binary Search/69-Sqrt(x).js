/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2)
        return x;
    let result = 0;
    let low = 1;
    let high = x/2;
    while(low <= high) {
        let mid = low + Math.floor((high-low)/2);
        let sqrt = mid * mid
        if (sqrt === x) return mid;
        else if(sqrt < x){
            low = mid + 1;
            result = mid;
        }
        else high = mid - 1;
    }
    return result;
};