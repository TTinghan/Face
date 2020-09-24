// 找到数组中的最大值
let arr = [1, 3, 2, 4, 8, 5, 4, 6];
Math.max(...arr); // es6拓展运算符
Math.max.apply(null, arr);// apply

function arrMax (list) {
    let max = [];
    for(let i = 0; i < list.length - 1; i++) {
        max = max < list[i + 1] ? list[i + 1] : max;
    }
    return max;
}
arrMax(arr);// for循环

function arrSort (list) {
    list.sort((num1, num2) => {
        return num1 - num2 < 0;
    });
    list.reverse();
    return list[0];
}
arrSort(arr);// sort排序 + reverse


function arrReduct (list) {
    list.reduce((num1, num2)=> {
        return num1 > num2 ? num1 : num2;
    });
}
arrReduct(arr);// reduce数组中的每个值（从左到右）开始缩减
