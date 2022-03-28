import { BaseComponent, Component } from "./BaseComponent";

type OnCloseListener = () => void;

export class PageItemComponent extends BaseComponent<HTMLElement> {
  private closeListener?: OnCloseListener;

  constructor() {
    super(`
    <li class="page-item">
      <section class="page-item__body"></section>
      <div class="page-item__controls">
        <button class="close">X</button>
      </div>
    </li>
    `); //this.element

    const closeBtn = this.element.querySelector(".close") as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };
  }
  // section의 자식으로 {child}를 추가해줌
  addChild(child: Component) {
    //child는 class
    const container = this.element.querySelector(
      ".page-item__body"
    ) as HTMLElement;

    child.attachTo(container); //.page-item__body에 받아온 class의 htmlString을 자식으로 넣어줌
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}
