{
  const num: number = 1;

  const str: string = "123";

  const bool: boolean = true;

  const unde: undefined = undefined; // undefined만 할당할 수 있으므로 안씀
  const unde_: string | null = "asd";
  let unde2: number | undefined = 123; // 이렇게 씀

  function find(): number | undefined {
    //number나 undefined를 return
    return undefined;
  }

  function print(): void {
    //아무것도 return 하지 않을때
    console.log("return nothing");
  }

  let unusable: void = undefined; // 변수에 void type을 주면 undefined만 할당가능

  function throwError(message: string): never {
    // never 라고 정의하면 함수를 호출하면 return할 계획이 전혀 없음을 알려줌
    // message -> server (log)
    throw new Error(message);

    // or
    while (true) {}
  }

  let obj: object; //안쓰는 것이 좋음
  function objectFunc(obj: object) {}
  objectFunc({ name: "park" });
  objectFunc({ age: 123 });
}
