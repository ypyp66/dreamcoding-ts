import { BaseComponent } from "./BaseComponent";

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, content: string) {
    super(`
    <div>
      <h4 class="note_title"></h4>
      <p class="note_content"></p>
    </div>`);

    const titles = this.element.querySelector(
      ".note_title"
    ) as HTMLHeadingElement;
    const contents = this.element.querySelector(
      ".note_content"
    ) as HTMLParagraphElement;

    titles.textContent = title;
    contents.textContent = content;
  }
}
