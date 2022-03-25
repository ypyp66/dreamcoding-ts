function CoffeeMachine(beans) {
  this.beans = beans;

  //만들어지는 인스턴스마다 포함되어있음, instance level
  // this.makeCoffee = (shots) => {
  //   console.log("making...");
  // };
}

//Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making...");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log(machine1, machine2);

function LatteMachine(milk) {
  if (typeof milk !== "number") {
    throw new Error("milk must number");
  }
  this.milk = milk;
}

//LatteMachine에 CoffeeMachine의 prototype을 연결해줌
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
