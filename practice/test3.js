// 一些常见算法

/** 
 * 求回文字符串的 最大子回文
 * @param {*} s 
 */
var longestPalindrome = function(s) {
    let result = '';
    for (let i in s) {
        var lastIndex = s.lastIndexOf(s[i]);
        while (lastIndex >= i) {
            const splitedString = s.slice(i, lastIndex + 1);
            if (isPalindrome(splitedString)) {
                if (result.length < splitedString.length) {
                    result = splitedString
                } else {
                    break;
                }
            } else {
                lastIndex = s.slice(0, lastIndex).lastIndexOf(s[i]);
            }
        }
    }
    return result;
};

/**
 * 是不是回文字符串 Palindrome
 * @param {*} s 
 */
function isPalindrome (s) {
    if (s.split('').reverse().join('') === s) {
        return true;
    } else {
        return false;
    }
}