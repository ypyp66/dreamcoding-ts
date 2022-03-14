function readFile(fileName: string): string {
  if (fileName === "not Exist") {
    throw new Error(`file not exist ${fileName}`);
  }

  return "file contents";
}

function closeFile(fileName: string) {}

const fileName = "not Exist";

try {
  console.log(readFile(fileName));
} catch (e) {
  console.log("catched!!");
} finally {
  closeFile(fileName);
  console.log("finally");
}

console.log("!!!");
closeFile(fileName);
