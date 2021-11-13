type Command = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculator(state: Command, x: number, y: number) {
  switch (state) {
    case "add":
      return x + y;
    case "divide":
      return x / y;
    case "multiply":
      return x * y;
    case "remainder":
      return x % y;
    case "substract":
      return x - y;
    default:
      throw new Error("state 에러");
  }
}
