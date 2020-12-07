// 手动写出一个浅克隆 --》
// 创建一个新的对象，遍历需要克隆的对象，
// 将需要克隆对象的属性依次添加到新对象上，
// 返回。
function clone(target) {
     let cloneTarget = {}; 
     for (const key in target) { 
         cloneTarget[key] = target[key];
         }
          return cloneTarget; 
    };
// 手动实现一个深克隆 --》如果有更深层次的对象可以继续递归直到属性为原始类型
// JSON.parse(JSON.stringify()); 
// 如果是原始类型，无需继续拷贝，直接返回
// 如果是引用类型，创建一个新的对象，遍历需要克隆的对象，
// 将需要克隆对象的属性执行深拷贝后依次添加到新对象上
function cloneDeep(target) {
     if (typeof target === 'object') {
          let cloneTarget = {};
           for (const key in target) {
                cloneTarget[key] = cloneDeep(target[key]);
             } 
             return cloneTarget; 
    }
    else {
         return target;
    } 
};

