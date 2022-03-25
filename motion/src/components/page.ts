// export class PageComponent {
//   private element: HTMLUListElement; //타입은 ul태그

import { BaseComponent } from "./BaseComponent";

//   constructor() {
//     this.element = document.createElement("ul"); //element 변수는 ul태그를 가짐
//     this.element.setAttribute("class", "page"); //class를 page로
//     this.element.textContent = "This is PageComponent"; //내용은 this is~ 로
//   }

//   //부모태그를 가져와 붙여줌
//   //특정 위치에 DOM tree 안에 원하는 node들을 추가
//   //beforebegin : 타겟 element node 바로 전에
//   //afterbegin : 타겟 element node의 첫번째 child로
//   //beforeend : 타겟 element node의 마지막 child로
//   //afterend : 타겟 element node 바로 다음에
//   attachTo(parent: HTMLElement, position: InsertPosition = "afterend") {
//     parent.insertAdjacentElement(position, this.element);
//     // element를 parent의 position에 해당하는 곳에 붙임
//   }
// }

// export class PageComponent implements Base {
//   /**
//    1. element를 생성
//    2. element를 기준 element의 자식으로 붙여야함
//    */
//   private element: HTMLElement;
//   constructor() {
//     this.element = document.createElement("ul");
//     this.element.textContent = "This is Text";
//   }

//   attachTo(target: HTMLElement, postion: InsertPosition = "beforeend") {
//     target.insertAdjacentElement(postion, this.element);
//   }
// }

// BaseComponent.ts 제작 후

export class PageComponent extends BaseComponent<HTMLUListElement> {
  /**
   1. element를 생성
   2. element를 기준 element의 자식으로 붙여야함
   */
  constructor() {
    super("<ul class='page'>This is Test</ul>");
  }
}
