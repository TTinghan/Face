// 一个str='aaasjadasdalsd'，计算每个字符出现的次数

function everyCodeTimes(str) {
    let obj = {};
    for(let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);// 用index返回每个字符
        if(!obj[ch]) {
            obj[ch] = 1;
        }else {
            obj[ch]++;
        }
    }
    return obj;
}

function everyCodeTimes(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        let key = str[i];
        if (obj[key]) {
            obj[key]++;
        } else {
            obj[key] = 1;
        }
    }
    return obj;
}
