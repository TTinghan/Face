function myNew(func, ...args){
  let obj = {};
  obj.__propo__ = func.prototype;
  let result = func.apply(obj, ...args);
  return (result !== null && typeof result === 'object') ? result : obj
}