/**
 * 最长公共前缀
 * 先比较第一个和第二个的公共前缀
 * 在用1&2的公共前缀与第三个比较 获得最终的前缀
 * return的条件：
 * --》没有字符 或
 */
function maxPreFix(arr) {

}

function fixStr(strs) {
    if (strs === null || strs.length === 0) return "";
    let prevs = strs[0]
    for(let i = 1; i < strs.length; i++) {
        let j = 0
        for(; j < prevs.length && j < strs[i].length; j++) {
            if(prevs.charAt(j) !== strs[i].charAt(j)) break
        }
        prevs = prevs.slice(0, j)
        if(prevs === "") return ""
    }
    return prevs
}
