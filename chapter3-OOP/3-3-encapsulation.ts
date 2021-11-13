{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected

  class CoffeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; //static을 붙이면 class level이 됨, instance가 아닌 Class마다 생성됨
    private coffeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeBeans = coffeeBeans;
    }

    static makeMachine(coffeBeans: number): CoffeMaker {
      return new CoffeMaker(coffeBeans);
    }

    fillCoffeeBeans(coffeeBeans: number) {
      if (coffeeBeans < 0) {
        throw new Error("coffee beans must more than 0");
      }
      this.coffeBeans += coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      // 만들어진 커피를 return
      if (this.coffeBeans < shots * CoffeMaker.BEANS_GRAM_PER_SHOT) {
        //커피 콩의 양이 필요량 보다 적다면
        throw new Error("Not Enough Coffee Beans");
      }

      this.coffeBeans -= shots * CoffeMaker.BEANS_GRAM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeMaker(32);
  maker.fillCoffeeBeans(32);
}
