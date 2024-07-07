/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
        let totalCanDrink = numBottles;
        while(numBottles >= numExchange)
        {
            totalCanDrink += Math.floor(numBottles / numExchange);
            numBottles = Math.floor(numBottles / numExchange) + (numBottles % numExchange);
        }
        return totalCanDrink;
};