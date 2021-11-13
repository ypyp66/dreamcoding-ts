{
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }
  // //into TS
  // function tsAdd(num1: number, num2: number): number {
  //   return num1 + num2;
  // }
  // function jsFetchNum(id) {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }
  // //into TS
  // function tsFetchNum(id: string): Promise<number> {
  //   //promise객체가 숫자를 넘겨주므로 Promise<number>
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  function addNumbers(...nums: number[]): number {
    return nums.reduce((acc, cur) => acc + cur, 0);
  }

  console.log(addNumbers(1, 2, 2, 3));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5));
}
