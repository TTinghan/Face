function task1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('task1 完成');
        resolve(1);
      }, 100);
    });
  }
  
  function task2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('task2 完成');
        resolve(2);
      }, 200);
    });
  }
  
  function task3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('task3 完成');
        resolve(3);
      }, 300);
    });
  }
  function task4() {
    return Promise.reject(new Error('task4 出错了'));
  }
  
  Promise.all([
    task1(),
    task4(), // ⚠️ 这里直接抛错
    task2(),
    task3()
  ])
  .then(res => {
    console.log('全部成功:', res);
  })
  .catch(err => {
    console.log('捕获错误:');
    console.log(err.message);
  });