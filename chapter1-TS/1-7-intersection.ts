{
  /**
   * Intersection Type : &
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    id: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.score, person.id, person.work());
  }

  internWork({
    name: "park",
    score: 1,
    id: 1,
    work: () => {},
  });
}
