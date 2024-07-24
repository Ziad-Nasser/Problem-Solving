const totalEat = (piles ,h, s) => {
    let totalHours = 0;
    for (let pile of piles) {
        totalHours += Math.ceil(pile/s)
        if (totalHours > h) return false;
    }
    return totalHours <= h;
}

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (totalEat(piles, h, mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};