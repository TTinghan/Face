/**
 * 事件的发布-订阅模式
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