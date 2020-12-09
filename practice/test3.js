// 一些常见算法

/** 
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * acbbabc
 * @param {*} s 
 */
var longestPalindrome = function(s) {
    let result = '';
    for (let i in s) {
        var lastIndex = s.lastIndexOf(s[i]);// 最后出现的index
        while (lastIndex >= i) {
            const splitedString = s.slice(i, lastIndex + 1);// 截取子回文str
            if (isPalindrome(splitedString)) { // 判断这子段是不是回文
                if (result.length < splitedString.length) { // 找到那个长度最长的回文子序列
                    result = splitedString;
                } else {
                    break;
                }
            } else {
                lastIndex = s.slice(0, lastIndex).lastIndexOf(s[i]);// 找到
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
    return s.toString() === s.toString().split('').reverse().join('');
}