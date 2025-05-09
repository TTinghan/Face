/**
 * 深拷贝 完整版！！！！
 * 关键点：=>
 * 判断类型
 * 返回创建实例对象的 Object 构造函数的引用constructor
 * 枚举+递归
 */

const copy = JSON.parse(JSON.stringify(data)); // JSON不支持的类型都用不了

 function cloneDeep(target) {
     if(target == null || typeof target !== 'object') return target;
     const newObj = new target.constructor(); //返回创建实例对象的 Object 构造函数的引用， 无需判断Function或ExpReg
     for( let key in Object.getOwnPropertyDescriptors(target)){ // 获取直接赋予该对象的属性，不需要从原型链上进行查找的属性
        newObj[key] = cloneDeep(target[key])
     } 
     return newObj
 }

// 手动写出一个浅克隆 --》
// 创建一个新的对象，遍历需要克隆的对象，
// 将需要克隆对象的属性依次添加到新对象上，
// 返回。
function clone(obj){
    if(obj == null || typeof obj !== 'object') return obj;
    let cloneTarget = {};
    for(let key in obj) {
        cloneTarget[key] = obj[key]
    }
    return cloneTarget;
}

// 手动实现一个深克隆 --》如果有更深层次的对象可以继续递归直到属性为原始类型
// JSON.parse(JSON.stringify()); 
// 如果是原始类型，无需继续拷贝，直接返回
// 如果是引用类型，创建一个新的对象，遍历需要克隆的对象，
// 将需要克隆对象的属性执行深拷贝后依次添加到新对象上

function deepClone(obj) {
    if (obj === null) return null; 
    if (typeof obj !== "object") return obj; 

    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);

    let newObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key]);
        }
    }
    return newObj;
}