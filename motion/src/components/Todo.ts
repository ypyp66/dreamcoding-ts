import { BaseComponent } from "./BaseComponent";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`
    <section class="todo">
      <h2 class="todo__title"></h2>
      <input type="checkbox" id="todo" class="todo-checkbox"/>
    </section>`);

    const titles = this.element.querySelector(
      ".todo__title"
    ) as HTMLHeadingElement;
    const todoElement = this.element.querySelector(
      ".todo-checkbox"
    ) as HTMLInputElement;

    titles.textContent = title;
    todoElement.insertAdjacentText("afterend", todo);
    todoElement.placeholder = "todo";
  }
}
