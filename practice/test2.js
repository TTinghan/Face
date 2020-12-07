/**   两颗星   */
// 手写lodash/curry 柯里化
function curry (func) {
    return function curriedFn (...args) {
    // 判断实参和形参的个数
    if (args.length < func.length) {
        return function () {
            return curriedFn(...args.concat(Array.from(arguments))) // 这里面就是把每次的参数结合起来，再次调用curriedFn
        }
    }
    // 实参和形参个数相同，调用 func，返回结果
    return func(...args)
    }
}

// 手写lodash/flowRight(f,g) 是从右到左运行=> 函数组合f(g(x))
// 考点 reduce(fn) =>
// reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
// reduce() 可以作为一个高阶函数，用于函数的 compose组合。
function flowRight (...fns) {
    return function (initValue) {
        return fns.reverse().reduce(function (arr, itemFn) { // 对reduce不熟的去看一下
            return itemFn(arr) // 每次都将参数放在每一个函数中执行一次
        }, initValue)
    }
}
// -->应用：取出数组最后一项并大写，flowRight使用方法
const arr = ['red', 'yellow', 'blue']
const toUpper = s => s.toUpperCase();
const reverse = arr => arr.reverse();
const first = arr => arr[0];

const composeFn = flowRight(toUpper, first, reverse);// 传入需要组合的fns 
composeFn(arr);// 执行这个composeFn