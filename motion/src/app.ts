import { ImageComponent } from "./components/Image.js";
import { NoteComponent } from "./components/Note.js";
import { PageComponent } from "./components/page.js";
import { VideoComponent } from "./components/Video.js";
import { MOCK_IMAGES } from "./constants/MockImages.js";

// class App {
//   private page: PageComponent;
//   constructor(appRoot: HTMLElement) {
//     this.page = new PageComponent();
//     this.page.attachTo(appRoot); //appRoot의 afterend 위치에 page를 붙임
//   }
// }

class App {
  private page;
  private image;
  private video;
  private note;

  constructor(rootEl: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(rootEl);

    this.image = MOCK_IMAGES.map(
      ({ src, alt }) => new ImageComponent(src, alt)
    );
    this.image.map((v) => v.attachTo(rootEl));

    this.note = new NoteComponent("Title", "내용");
    this.note.attachTo(rootEl);

    this.video = new VideoComponent(
      "https://www.youtube.com/embed/7BqfVZWGX3I"
    );
    this.video.attachTo(rootEl);
  }
}

const rootEl = document.querySelector(".main"); // root element를 가져옴
new App(rootEl as HTMLElement); //rootEl의 타입을 캐스팅함
