// promise.all
function myPromiseAll(promises){
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promises)) {
      return reject(new TypeError('arguements is must be array!'))
    }
    let promisesLen = promises.length;
    let resolvedValue = new Array(promisesLen);
    let resolvedCounter = 0;
    for (let i = 0; i< promisesLen; i++) {
      Promise.resolve(promises[i].then(function(value) {
        resolvedCounter ++;
        resolvedValue[i] = value;
        if(resolvedCounter === promisesLen) {
          resolve(resolvedValue);
        }
      }, function(reason) {
        reject(reason);
      }))
    }
  })
}
// 实例
myPromiseAll([
  console.log(111),
  Promise.resolve('2222'),
  Promise.reject('333'),
  Promise.resolve('4444'),
])
// eventBus
// 最长公共前缀