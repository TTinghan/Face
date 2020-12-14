// 草稿练习用的
Function.prototype.bind = function(asThis){
    if(asThis == null || typeof asThis === 'undefined'){
        asThis = window;
    }
    let fn = this;
    return function(...args){
        return fn.apply(asThis, args)
    }
}

Function.prototype.call = function(asThis, ...args){
    if(asThis === null || typeof asThis === 'undefined') {
        asThis = window;
    }
    let fnSymbol = Symbol();
    asThis[fnSymbol] = this;
    let fn = asThis[fnSymbol](...args);
    delete asThis[fnSymbol];
    return fn;
}

Function.prototype.apply = function(asThis, args){
    if(asThis === null || typeof asThis === 'undefined') {
        asThis = window;
    }
    let fnSymbol = Symbol();
    asThis[fnSymbol] = this;
    let fn = asThis[fnSymbol](...args);
    delete asThis[fnSymbol];
    return fn;
}

function myInstanceof(left, right){
    if(left === null || typeof left !== 'object'){
        return false
    }
    let proto = Object.getPrototypeOf(left);
    while(proto){
        if(proto === right.prototype){
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}

function curry(fn){
    const g = (...allArgs)=>{
        allArgs.length > fn.length ? fn(...allArgs) : (...restArgs) => g(...allArgs, ...restArgs)
    }
    return g;
}
function flat(arr){
    let result = [];
    for(let ele of arr){
        if(Array.isArray(ele)){
            result = result.concat(flat(ele))
        }else {
            result = result.concat(ele)
        }
    }
    return result;
}

function flatten(arr){
    return [].concat(
        ...arr.map(ele => Array.isArray(ele) ? flatten(ele) : ele)
    )
}

function debounce(fn, wait){
    let timer;
    return (args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(...args)
        }, wait);
    }
}

function throttle(fn, wait){
    let timer;
    return (args)=>{
        if(timer){
            return;
        }
        timer = setTimeout(()=>{
            fn(...args);
            timer = null;
        }, wait);
    }
}

function composeFn(...fn){
  return function(initValue){
      return fn.reverse().reduce(function(arrArgs, itemFn){
          return itemFn(arrArgs);
      }, initValue);
  }
}

function binarySearch(target, arr, start = 0, end = arr.length - 1){
   if(start > end) return -1;
   if(target === arr[mid]) {
       return mid;
   }else if(target > arr[mid]) {
       return binarySearch(target, arr, start, mid - 1);
   }else {
       return binarySearch(target, arr, mid + 1, end)
   }
}

function binarySearch(target, arr) {
    let start = 0;
    let end = arr.length -1;
    if(start > end) return -1;
    while(start < end) {
        if(target === arr[mid]){
            return mid;
        }else if(target > arr[mid]){
            end = mid - 1;
        }else {
            start = mid + 1;
        }
    }
}

// 计算表达式中左右括号匹配的对数，以及落单的左括号个数，右括号个数
// 例：
// 输入："1*2+(3+3)())))(((("
// 输出：2 4 3（三个结果空格隔开）
function itemTimes(s){
    let left = [];
    let right = [];
    let compose = 0;
    for(let i = 0; i < s.length; i++){
       switch(s[i]){
           case '(':
            left.push(s[i]);
            break;
           case ')':
           if(left.length === 0){
               right.push(s[i])
           }else {
               left.pop();
               compose ++;
           }
       }
    }
    return `${compose} ${left.length} ${right.length}`
}
 function bubbleSort(arr) {
     let len = arr.length;
     let stop;
     for(let i = 0; i < len; i++){
         stop = len - i -1;
         for(let j = 0; j < stop; j++){
             if(arr[j] > arr[j+1]){
                 swap(arr, j, j + 1);
             }
         }
     }
     return arr;
 }

 function swap(arr, index1, index2) {
     let temp = arr[index1];
     arr[index1] = arr[index2];
     arr[index2] = temp;
 }

 function selectionSort(arr){
     let len = arr.length;
     let min;
     for(let i = 0; i< len; i++){
         min = i;
         for(let j = i + 1; j < len; j++){
             if(arr[j] < arr[min]){
                 min = j;
             }
         }
         if(i !== i){
             swap(arr, i, min);
         }
     }
     return arr;
 }

 function insertionSort(arr){
     let len = arr.length;
     let value;
     let j;
     for(let i = 0; i< len; i++){
         value = arr[i];
         for(j = i + 1; j > -1 && arr[j] > value; j--){
             arr[j + 1] = arr[j];
         }
         arr[j + 1] = value;
     }
     return arr;
 }

 function mergeSort(arr){
     if(arr.length < 2){
        return arr;
     }
     let middle = Math.floor(arr.length / 2);
     let left = arr.slice(0, middle);
     let right = arr.slice(middle);
     return merge(mergeSort(left), mergeSort(right));
 }
 function merge(left, right){
     let result = [];
     let left_index = 0;
     let right_index = 0;
     while(left_index < left.length && right_index < right.length){
         if(left[left_index] < right[right_index]){
             result.push(left[left_index ++])
         }else{
             result.push(right[right_index ++])
         }
     }
     return result.concat(left.slice(left_index)).concat(right.slice(right_index));
 }

 function quickSort(arr){
     if(arr.length <= 1){
         return;
     }
     let pivotIndex = Math.floor(arr.length / 2);
     let pivot = arr.splice(pivotIndex, 1)[0];
     let left = [];
     let right = [];
     for(let i = 0; i < arr.length; i++){
         if(arr[i] < pivot){
             left.push(arr[i]);
         }else {
             right.push(arr[i]);
         }
     }
     return quickSort(left).concat([pivot], quickSort(right));
 }

 /**
  * 随机生成rgb色号
  */
 function randomColor(){
     const r = parseInt(Math.random() * 256);// 0~255
     const g = parseInt(Math.random() * 256);
     const b = parseInt(Math.random() * 256);
     return `rgb(${r},${g},${b})`;
 }

/**
 * 随机生成hex色号
 * 使用 Math.random 生成一个随机的24位（6x4位）十六进制数。
 * 使用位操作符 | 为了保留整数位
 * 然后使用 toString(16) 将其转换为十六进制字符串。
 */
 function randomHexColorCode(){
     let num = Math.random() * 0xffffff | 0;// 生成6位随机数
     let str = num.toString(16);// 转16进制字符串
     let lastStr = str.length !== 6 ? (Math.random() * 0xf | 0).toString(16) + str : str
     return `#${lastStr}`;
 }
//  randomHexColorCode()// "#435d41"
const randomHexColorCode = () => {
    let n = ((Math.random() * 0xfffff) | 0).toString(16);
    return '#' + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n);
};

/**
 * 将hex转rgb,
 * 不需要兼容的hex
 */
function hexToRgba(hex, opacity) {
    return "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")";
}

function hexToRgba(hex, opacity = 1){
    const r = parseInt(`0x${hex.slice(1,3)}`);// 略过# 从1开始取
    const g = parseInt(`0x${hex.slice(3,5)}`);
    const b = parseInt(`0x${hex.slice(5,7)}`);
    return `rgba(${r},${g},${b},${opacity})`
}
/**
 * 将hex转rgb
 * 需要兼容三位的hex
 */
function hexToRgb(hex){
    let reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/
    let newHex = hex.toLowerCase();// 转为小写
    if(newHex && reg.test(newHex)){
        if(newHex.length === 4){
            let newColor = '#';
            for(let i = 1; i< newHex.length; i++){
                newColor += newHex.slice(i, i+1).concat(newHex.slice(i, i+1));
            }
            newHex = newColor;
        }
        let newArr = [];
        for(let i = 1; i < newHex.length; i+=2){
            newArr.push(parseInt(`0x${newHex.slice(i, i+2)}`))
        }
        return `rgb(${newArr.join(',')})`;
    }else {
        return newHex;
    }
}
