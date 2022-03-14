{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): void;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class Stack implements Stack {
    private _size: number = 0;
    private _head?: StackNode;

    constructor(private stackSize?: number) {}

    get getSize() {
      return this._size;
    }

    push(value: string) {
      if (this._size === this.stackSize) {
        throw new Error("Stack is Full");
      }
      const node: StackNode = {
        value,
        next: this._head, // 새로운 노드는 헤드가 가리키는 노드를 가리킴
      }; // node를 정의

      this._head = node; // 헤드는 새로운 노드를 가리킴

      this._size++; // 스택의 사이즈 증가
    }

    pop(): string {
      if (this._head == null) {
        throw new Error("Stack is Empty");
      }

      // 스택이 비어있지 않은 경우
      const node = this._head; // 헤드가 가리키는 노드를 할당

      this._head = node.next; // 제거되는 노드가 가리키는 노드를 할당
      this._size--; // 스택 사이즈 감소
      return node.value;
    }
  }

  console.log("=============Success");
  const stack = new Stack();
  stack.push("1");
  stack.push("2");
  stack.push("3");
  stack.push("4");
  stack.push("5");
  stack.push("6");

  console.log(stack.getSize);

  while (stack.getSize !== 0) {
    console.log(stack.pop());
  }

  console.log("=============Full");
  const stack2 = new Stack(3);
  stack2.push("1");
  stack2.push("2");
  stack2.push("3");
  stack2.push("4");

  console.log(stack2.getSize);

  console.log("=============Error");
  const stack3 = new Stack(3);
  stack3.push("1");
  stack3.push("2");
  stack3.push("3");
  stack3.push("4");

  while (stack3.getSize !== 0) {
    console.log(stack3.pop());
  }

  stack3.pop();
}
