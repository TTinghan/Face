/**
 * 事件的发布-订阅模式
 * 是一种广泛的设计模式，发布者会把消息发送到一个中间媒介，然后订阅者可以在通过订阅媒介以接收相关的消息
 * 可以随时发布，可以随时取消订阅，异步处理，一对多的广播通信方式
 */
class EventHub{
  constructor() {
    this.events = {};
  }

  // 注册事件
  on(event, fn) {
    if(!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(fn);
  }

  // 触发事件
  emit(event,data) {
    const fnList = this.events[event];
    if(fnList && fnList.length > 0) {
      fnList.forEach(fn => {
        fn(data)
      });
    }
  }

  // 删除事件
  off(event, fn) {
    const fnList = this.events[event];
    const index = fnList.indexOf(fn);
    if(index === -1 ) return;
    fnList.splice(index, 1);
  }
}
const eventHub = new EventHub();
const hander = (data)=>{console.log(data)};
// 订阅事件(监听)
eventHub.on('currentEvent', hander); // '66666'
// 在合适的地方触发事件(执行)
// 通过on方法注册的handler函数就会被调用，且会接收到emit方法传递的数据
eventHub.emit('currentEvent', '66666');
// 如果你不再需要这个handler函数监听customEvent，你可以通过off方法移除它
eventHub.off('currentEvent', hander)
eventHub.emit('currentHub', '1111'); // 不会打印

// 二分查找 
// nums = [-1,0,3,5,9,12], target = 9
// 9 出现在 nums 中并且下标为 4
var binarySearch = function(target, arr, start = 0, end = arr.length) {
  if (start > end) {
    return -1
  }
  let mid = Math.floor((start + end)/2);
  if(target === arr[mid]) {
    return mid;
  } else if (target < arr[mid]) {
    return binarySearch(target, arr, start, mid - 1 )
  } else {
    return binarySearch(target, arr, mid + 1, end);
  }
}

// nums = [-1,0,3,5,9,12], target = 2
// 2 不存在 nums 中因此返回 -1
var binarySearch1 = function(target, arr) {
  let start = 0;
  let end = arr.length - 1;
  while(start < end) {
    let mid = Math.floor((start + end)/2);
    if(target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  if (start > end) return -1;
}


// 理解组合式函数compose，实现一个中间件
var composeFn = (...fns) => fns.reduce((a,b) => (...args) => (a(b(...args))))