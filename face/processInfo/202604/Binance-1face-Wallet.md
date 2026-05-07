// 实现 DeferTaskQueue class
// we can use method deferTaskQueue.add() add async function to the queue
// all tasks should run one by one

class DeferTaskQueue {
  constructor() {
    this.queue = [];
    this.isRun = false;
  }
  // todo
 async add(task) {
    this.queue.push(task);
    if (this.isRun) return;
    this.isRun = true;
    while (this.queue.length > 0) {
      const task = this.queue.shift();
      await task();
    }
    this.isRun = false;
    // todo
  }
}

async function testRun() {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const deferTaskQueue = new DeferTaskQueue();

  deferTaskQueue.add(async () => {
    console.log('1 begin');
    await sleep(1000);
    console.log('1 end');
  });

  deferTaskQueue.add(async () => {
    console.log('2 begin');
    await sleep(700);
    console.log('2 end');
  });

  await sleep(4000);

  deferTaskQueue.add(async () => {
    console.log('3 begin');
    await sleep(300);
    console.log('3 end');
  });
}

console.log('start test');
testRun();
// 控制台应该按顺序输出以下
// 1 begin
// 1 end
// 2 begin
// 2 end
// 3 begin
// 3 end

