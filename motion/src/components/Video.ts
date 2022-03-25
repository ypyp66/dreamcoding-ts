import { BaseComponent } from "./BaseComponent";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(src: string) {
    super(
      `<div><iframe class="iframe" width="560" height="315" clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
    );

    const iframeEl = this.element.querySelector(".iframe") as HTMLIFrameElement;

    iframeEl.src = src;
  }
}
