/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     let i = -1;
    let stack = [];
    for (let ch of s) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
            i++;
        } else {
            if (i >= 0 && ((stack[i] === '(' && ch === ')') || (stack[i] === '{' && ch === '}') || (stack[i] === '[' && ch === ']'))) {
                stack.pop();
                i--;
            } else {
                return false;
            }
        }
    }
    return i === -1;
};

module.exports = { isValid };


