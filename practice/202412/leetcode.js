function longestWordChain(words) {
    // 按长度对单词排序
    words.sort((a, b) => a.length - b.length);

    // 缓存每个单词的最长链长度
    const wordToChainLength = new Map();

    // 定义DFS函数
    function dfs(word) {
        // 如果已经计算过，直接返回缓存值
        if (wordToChainLength.has(word)) {
            return wordToChainLength.get(word);
        }

        let maxLength = 1; // 当前单词本身算作长度1
        for (let i = 0; i < word.length; i++) {
            // 尝试删除word中的每个字母，生成一个可能的前置单词
            const prevWord = word.slice(0, i) + word.slice(i + 1);
            if (wordToChainLength.has(prevWord)) {
                maxLength = Math.max(maxLength, 1 + dfs(prevWord));
            }
        }

        // 缓存结果
        wordToChainLength.set(word, maxLength);
        return maxLength;
    }

    // 初始化所有单词的最长链长度
    for (const word of words) {
        if (!wordToChainLength.has(word)) {
            dfs(word);
        }
    }

    // 返回最长链的长度
    return Math.max(...wordToChainLength.values());
}

// 示例测试
const words = ["a", "b", "ba", "bca", "bda", "bdca"];
console.log("最长单词链的长度是:", longestWordChain(words));
