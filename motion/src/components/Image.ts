import { BaseComponent } from "./BaseComponent";

// export class ImageComponent implements Base {
//   private element: HTMLElement;

//   constructor(src: string, alt: string) {
//     const template = document.createElement("template");
//     template.innerHTML = `
//     <section class="image">
//       <p class="image_title"></p>
//       <div class="image_holder"><img class="image_thumbnail"></div>
//     </section>`;

//     this.element = template.content.firstElementChild as HTMLElement;

//     const imageElement = this.element.querySelector(
//       ".image_thumbnail"
//     ) as HTMLImageElement;

//     imageElement.src = src;
//     imageElement.alt = alt;

//     const titleElement = this.element.querySelector(
//       ".image_title"
//     ) as HTMLParagraphElement;

//     titleElement.textContent = ;
//   }

//   attachTo(target: HTMLElement, position: InsertPosition = "beforeend") {
//     target.insertAdjacentElement(position, this.element);
//   }
// }

// BaseComponent.ts 제작 후

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(src: string, alt: string) {
    super(`
    <section class="image">
      <p class="image_title"></p>
      <div class="image_holder"><img class="image_thumbnail"></div>
    </section>
    `);

    const imageElement = this.element.querySelector(
      ".image_thumbnail"
    ) as HTMLImageElement;

    imageElement.src = src;
    imageElement.alt = alt;

    const titleElement = this.element.querySelector(
      ".image_title"
    ) as HTMLParagraphElement;

    titleElement.textContent = "Title";
  }
}
