{
  /**
   * Enum Type : 상수 값들을 한군데 모아 관리
   */

  //js
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //ts
  enum Days {
    Monday = 1,
    Tuesday = "b",
    Wednesday = 3,
    Thursday = "d",
    Friday = "e",
    Saturday = "f",
    Sunday = "g",
  }

  //가능한 쓰지 않는 것이 좋음

  console.log(Days.Friday);
  let day = Days.Saturday;
  day = 10; //다른 타입을 할당할 수 있음 -> 가능한 쓰지 않아야 하는 이유
  console.log(day);
}
