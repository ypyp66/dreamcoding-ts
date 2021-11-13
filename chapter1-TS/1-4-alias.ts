{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: string = "park";
  const name2: Text = "park"; // 이렇게도 가능

  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "park",
    age: 26,
  };

  /**
   * String Literal Types
   * 문자열도 type으로 지정할 수 있다
   */

  type Name = "name";
  let myName: Name;
  myName = "name"; //Name 타입이므로 정의한 "name"만 쓸 수 있다.

  type JSON = "json";
  const json: JSON = "json";
}
