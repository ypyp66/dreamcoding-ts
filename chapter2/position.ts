type Direction = "up" | "down" | "left" | "right";
type Pos = {
  x: number;
  y: number;
};

let pos: Pos = {
  x: 0,
  y: 0,
};
function position(toward: Direction) {
  switch (toward) {
    case "up":
      pos.y++;
      break;
    case "down":
      pos.y--;
    case "left":
      pos.x--;
    case "right":
      pos.x++;
    default:
      throw new Error("에라");
  }
  return pos;
}

console.log(position("up"));
console.log(position("up"));
