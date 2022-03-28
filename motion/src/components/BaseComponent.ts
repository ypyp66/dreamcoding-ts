//interface로 정의 해놓음
export interface Component {
  attachTo(target: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
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

  //부모태그를 가져와 붙여줌
  //특정 위치에 DOM tree 안에 원하는 node들을 추가
  //beforebegin : 타겟 element node 바로 전에
  //afterbegin : 타겟 element node의 첫번째 child로
  //beforeend : 타겟 element node의 마지막 child로
  //afterend : 타겟 element node 바로 다음에

  //target의 position위치에 this.element(전달받은 htmlString)를 붙임
  attachTo(target: HTMLElement, position: InsertPosition = "beforeend") {
    console.log(target, "에", this.element, "추가");
    target.insertAdjacentElement(position, this.element);
  }

  removeFrom(parent: HTMLElement) {
    if (parent !== this.element.parentElement) {
      throw new Error("Parent Element가 아닙니다");
    }
    parent.removeChild(this.element);
  }
}
