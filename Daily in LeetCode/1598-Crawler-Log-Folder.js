/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let arr = [];
    for (let i of logs) {
        if (i == "../" && arr.length > 0) arr.pop();
        else if(i != "../" && i != "./") arr.push(i);
    }
    return arr.length
};