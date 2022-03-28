import { BaseComponent } from "./BaseComponent";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(src: string) {
    super(
      `<div><iframe class="iframe" width="560" height="315" clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
    );

    const iframeEl = this.element.querySelector(".iframe") as HTMLIFrameElement;

    iframeEl.src = this.convertURL(src);
  }

  private convertURL(url: string) {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regex);

    console.log(match);
    const videoId = match ? match[1] || match[2] : undefined;

    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }

    return url;
  }
}
