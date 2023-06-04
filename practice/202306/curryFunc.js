// 函数的柯里化应用
function checkAge(age) {
  return function(min) {
    return age >= min;
  }
}

const checkAge18 = checkAge(18);
const checkAge30 = checkAge(30);

// console.log('checkAge18(24): 6666', checkAge18(24));
// console.log('checkAge30(24): 6666', checkAge30(24));

// 手写一个柯里化函数curry
function curry(fn) {
  return function curried(...args) {
      if (args.length >= fn.length) {
          return fn.apply(this, args);
      } else {
          return function(...args2) {
              return curried.apply(this, args.concat(args2));
          }
      }
  };
}

// 用法示例
let sum = function(a, b, c) {
  return a + b + c;
};

let curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 输出6
console.log(curriedSum(1, 2, 3)); // 输出6
console.log(curriedSum(1, 2)(3)); // 输出6
console.log(curriedSum(1)(2, 3)); // 输出6
