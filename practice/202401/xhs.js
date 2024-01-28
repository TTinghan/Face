// promise.all
function myPromiseAll(promises){
 return new Promise((resolve, reject) => {
  if(!Array.isArray(promises)) {
    reject(new TypeError('arguements is must be array'))
  }
  let promisesLen = promises.length;
  let resolvedValue = new Array(promisesLen);
  let resolvedCounter = 0;
  for(let i = 0; i < promisesLen; i++) {
    Promise.resolve(promises[i]).then(function(value) {
      resolvedCounter++;
      resolvedValue[i] = value;
      if(resolvedCounter === promisesLen) {
        resolve(resolvedValue);
      }
    }, function(reason) {
      reject(reason);
    })
  }
 })
}
// 实例
myPromiseAll([
  // console.log(111),
  Promise.resolve('2222'),
  // Promise.reject('333'),
  Promise.resolve('4444'),
]).then((res) => {
  console.log('res: ', res);
})
// eventBus
class EventBus{
  constructor() {
    this.events = {}
  }
  on(event, fn) {
    if(!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(fn);
  }
  emit(event, data) {
    const fnList = this.events[event];
    if(fnList.length > 0) {
      fnList.forEach((fn) => {
        fn(data);
      })
    }
  }
  off(event, fn) {
    const fnList = this.events[event];
    const index = fnList.indexOf(fn);
    if(index === -1) {
      fnList.splice(index, 1);
    }
  }
}

const myEventBus = new EventBus();
const hander = (data) => {
  console.log('data: ', data);
}
myEventBus.on('currentBus', hander);
myEventBus.emit('currentBus', 1212);
myEventBus.off('currentBus', hander);
// 最长公共前缀