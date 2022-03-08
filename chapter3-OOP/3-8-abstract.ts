{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
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

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; //static을 붙이면 class level이 됨, instance가 아닌 Class마다 생성됨
    private coffeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeBeans = coffeeBeans;
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

    // 만들어진 커피를 return
    // 추상 메소드는 부모 클래스에서 구현하면 안됨
    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      console.log("making coffee");
      //커피를 만들기 위해서
      this.grindBeans(shots); //커피콩을 간다
      this.preheat(); //기계를 데운다
      return this.extract(shots); //샷을 추출한다
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      //자식 class에서 생성자를 구현하려면 super 키워드를 이용해야함
      super(beans);
    }
    private steamMilk() {
      console.log("steaming some milks...");
    }
    protected extract(shots: number): CoffeeCup {
      console.log(`CafeLatteMachine ${shots} shots extracting...`);
      this.steamMilk();
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    hasSugar = false;
    addSugar() {
      console.log("adding sugar...");
      this.hasSugar = true;
    }

    protected extract(shots: number): CoffeeCup {
      console.log(`SweetCoffeeMachine ${shots} shots extracting...`);
      this.addSugar();
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CafeLatteMachine(16, "SSS"),
    new SweetCoffeeMachine(16),
    new CafeLatteMachine(16, "SS"),
    new SweetCoffeeMachine(16),
  ];

  machines.forEach((machine) => {
    console.log("------------");
    machine.makeCoffee(1);
  });
}
