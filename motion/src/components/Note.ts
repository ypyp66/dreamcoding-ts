import { BaseComponent } from "./BaseComponent";

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, content: string) {
    super(`
    <section>
      <h2 class="note__title"></h2>
      <p class="note__body"></p>
    </section>`);

    const titles = this.element.querySelector(
      ".note__title"
    ) as HTMLHeadingElement;
    const contents = this.element.querySelector(
      ".note__body"
    ) as HTMLParagraphElement;

    titles.textContent = title;
    contents.textContent = content;
  }
}
