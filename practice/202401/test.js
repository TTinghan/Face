class EventHub{
  constructor() {
    this.events = {};
  }

  on(event, fn) {
    if(!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(fn);
  }

  emit(event, data) {
    const fnList = this.events[event];
    if(fnList && fnList.length > 0) {
      fnList.forEach(fn => {
        fn(data);
      });
    }
  }

  off(event, fn) {
    const fnList = this.events[event];
    const index = fnList.indexOf(fn);
    if(index === -1) {
      return;
    }
    fnList.splice(index, 1);
  }
}

const hander = (data) => {
  console.log(data);
}
const eventHub = new EventHub();
eventHub.on('currentHub', hander);
eventHub.emit('currentHub', '666');
eventHub.off('currentHub', hander);