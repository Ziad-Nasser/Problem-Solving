/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char === ')') {
      let reverse = [];
      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        reverse.push(stack.pop());
      }
      stack.pop();
      stack.push(...reverse);
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
};