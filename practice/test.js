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
        allArgs.length > fn.length ? fn(...allArgs) : (...restArgs)=>{g(...allArgs, ...restArgs)}
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

// 手写async/await

function myAsync(){
    gr(function *(){
        // TODO
    })
}

function gr(fn){
    const gen = fn();
    return new Promise((resolve, reject)=>{
        function step(fn){
            let next;
            try{
                next = fn();
            }catch(err){
                reject(err)
            }
            if(next.done){
                resolve(next.value);
            }
            next.value.then(()=>{
                step(gen.next)
            }).catch( err => reject(err))
        }
        step(gen.next);
    })
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

function longestPalindrome(s){
    let result = ''// 记录最长的
    for(let i in s){
        let lastIndex = s.lastIndexOf(s[i])
        while(lastIndex >= i){
            const splitStr = s.slice(i, lastIndex + 1);
            if(isPalindrome(splitStr)){
                if(result.length < splitStr.length){
                    result = splitStr;
                }else {
                    break;
                }
            }else {
                lastIndex = s.slice(0, lastIndex).lastIndexOf(s[i])// 继续向后找
            }
        }
    }
    return result;
}

function isPalindrome(s){
    return s.toString().split('').reverse().join('') === s.toString;
}

function reverseList(head){
   let pre = null;
   let cur = head;
   while(cur !== null){
       let nextTemp = cur.next;
       cur.next = pre;
       pre = cur;
       cur = nextTemp;
   }
   return pre;
}

function hasCircle(head){
    let map = new Map();
    while(head){
        if(map.get(head) === true){
            return true
        }else {
            map.set(head, true)
        }
        head = head.next;
    }
    return false;
}