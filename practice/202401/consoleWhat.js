var a = 10;
function fn(b) {
  b = 20;
  console.log(a, b);
}
function fn1() {
  a = 100;
  fn(a);
}
fn(200); //输出结果
fn1(); // 输出结果
