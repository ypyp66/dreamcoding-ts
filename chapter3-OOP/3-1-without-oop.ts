{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7; //1커피당 7그램이 필요하다고 가정

  let coffeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    // 만들어진 커피를 return
    if (coffeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      //커피 콩의 양이 필요량 보다 적다면
      throw new Error("Not Enough Coffee Beans");
    }

    coffeBeans -= shots * BEANS_GRAMM_PER_SHOT;

    return {
      shots,
      hasMilk: false,
    };
  }

  coffeBeans = 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
