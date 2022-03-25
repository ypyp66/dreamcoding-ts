console.log("=====================================");
console.log(this);

function simpleFunc() {
  console.log(this);
}
window.simpleFunc();

console.clear();

class Counter {
  count = 0;

  increase = function () {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase();

const caller = counter.increase; //변수에 할당했으므로 this를 잃어버림
// let, const로 선언한 변수는 window에 등록되어 있지 않음
// 함수는 기본적으로 글로벌 객체에 등록이 되어 글로벌 객체에서 이용이 가능함

caller();

class BOB {}
const bob = new BOB();
bob.count = 123;
bob.run = counter.increase;

bob.run();
console.log(bob.count);
