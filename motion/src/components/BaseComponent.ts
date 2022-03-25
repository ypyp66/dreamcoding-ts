//interface로 정의 해놓음
interface Component {
  attachTo(target: HTMLElement, position?: InsertPosition): void;
}

//HTMLElement를 상속하는 타입을 받는 제네릭 형식으로 작성
//Compoent interface를 구현하는 class임
export class BaseComponent<T extends HTMLElement> implements Component {
  protected readonly element: T; // 상속받는 곳에서만 사용가능하게, 읽기 전용으로
  constructor(htmlString: string) {
    //html string을 인자로 받음
    const template = document.createElement("template");
    template.innerHTML = htmlString;

    this.element = template.content.firstElementChild as T;
  }

  attachTo(target: HTMLElement, position: InsertPosition = "beforeend") {
    target.insertAdjacentElement(position, this.element);
  }
}
