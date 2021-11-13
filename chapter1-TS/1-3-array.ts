{
  //Array
  const fruits: string[] = ["apple", "banana"];
  const scores: Array<number> = [1, 2, 3];

  function printArray(fruits: readonly string[]) {
    fruits.push(); // error
  }

  // Tuple (권장하지 않음) -> interface, type alias, class
  let student: [string, number];
  student = ["park", 26];
  student[0]; // park
  student[1]; // 26

  const [name, age] = student; // 이렇게 쓸 수 있다 (구조분해할당)
}
