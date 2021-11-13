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

  class CafeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      //자식 class에서 생성자를 구현하려면 super 키워드를 이용해야함
      super(beans);
    }
    private steamMilk() {
      console.log("steaming some milks...");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // 반환 값은 CoffeeCup임
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    hasSugar = false;
    addSugar() {
      console.log("adding sugar...");
      this.hasSugar = true;
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.addSugar();
      return {
        ...coffee,
        hasSugar: this.hasSugar,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CafeLatteMachine(16, "SSS"),
    new SweetCoffeeMachine(16),
  ];

  machines.forEach((machine) => {
    console.log("------------");
    machine.makeCoffee(1);
  });

  const machine = new CoffeeMachine(23);
  const latteMachine = new CafeLatteMachine(23, "SSSS");
  const sugarCoffee = new SweetCoffeeMachine(23);
  //const coffee = latteMachine.makeCoffee(1);

  //console.log(coffee);
  //console.log(latteMachine.serialNumber);
  //console.log(sugarCoffee.makeCoffee(1));
}
