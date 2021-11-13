{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(coffeeBeans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; //static을 붙이면 class level이 됨, instance가 아닌 Class마다 생성됨
    private coffeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeBeans = coffeeBeans;
    }

    static makeMachine(coffeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeBeans);
    }

    fillCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error("coffee beans must more than 0");
      }
      console.log("filling  beans...");
      this.coffeBeans += coffeeBeans;
    }

    clean() {
      console.log("cleaning the machine...");
    }

    private grindBeans(shots: number) {
      console.log("grinding...");

      if (this.coffeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        //커피 콩의 양이 필요량 보다 적다면
        throw new Error("Not Enough Coffee Beans");
      }

      this.coffeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat() {
      console.log("heating...");
    }

    private extract(shots: number): CoffeeCup {
      // 만들어진 커피를 return
      console.log(`${shots} shots extracting...`);

      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      //커피를 만들기 위해서
      this.grindBeans(shots); //커피콩을 간다
      this.preheat(); //기계를 데운다
      return this.extract(shots); //샷을 추출한다
    }
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  /*
    AmateurUser나 ProBarista는 인터페이스가 어떻게 구현되어 있는지, 
    얼마나 많은 함수들이 있는지 신경쓰지 않고,
    인터페이스에 규약된 함수들만 이용해서 생성된 오브젝트와 의사소통 할 수 있다.
    */

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);

  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);

  amateur.makeCoffee();
  pro.makeCoffee();
}
