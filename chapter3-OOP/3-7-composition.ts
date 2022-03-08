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

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; //static을 붙이면 class level이 됨, instance가 아닌 Class마다 생성됨
    private coffeBeans: number = 0;

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeBeans = coffeeBeans;
    }
    /*
    생성자에서 milk와 sugar와 관련된 변수를 받음으로써
    추후 makeCoffee 함수가 실행될 때 
    결과에 milk가 포함되었는지, sugar가 포함되었는지, 종류는 어떤 것인지가 포함된다.
    */

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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.extract(shots); //샷을 추출한다
    }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  //싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("steaming some milk...");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("Fancy steaming some milk...");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("Fancy steaming some milk...");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  //설탕 제조기
  class AutomaticSugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from candy");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }
  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from jar");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }
  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  const candySugar = new AutomaticSugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  //같은 클래스를 기반으로 인스턴스를 생성하지만 다른 파라미터를 전달함으로써 서로 다른 객체를 만들 수 있다.
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, noSugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

  const latteMachine = new CoffeeMachine(22, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(22, coldMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}
