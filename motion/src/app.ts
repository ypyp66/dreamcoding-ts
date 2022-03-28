import { ImageComponent } from "./components/Image.js";
import { NoteComponent } from "./components/Note.js";
import { PageComponent } from "./components/page.js";
import { TodoComponent } from "./components/Todo.js";
import { VideoComponent } from "./components/Video.js";

// class App {
//   private page: PageComponent;
//   constructor(appRoot: HTMLElement) {
//     this.page = new PageComponent();
//     this.page.attachTo(appRoot); //appRoot의 afterend 위치에 page를 붙임
//   }
// }

class App {
  private page;

  constructor(rootEl: HTMLElement) {
    this.page = new PageComponent();

    const image = new ImageComponent("https://picsum.photos/300/200", "image");
    this.page.addChild(image);

    const video = new VideoComponent(
      "https://www.youtube.com/watch?v=K3-jG52XwuQ"
    );
    this.page.addChild(video);

    const todo = new TodoComponent("Todo Title", "Contents");
    this.page.addChild(todo);

    const note = new NoteComponent("Note Title", "Note Content");
    this.page.addChild(note);

    this.page.attachTo(rootEl);
  }
}

const rootEl = document.querySelector(".main"); // root element를 가져옴
new App(rootEl as HTMLElement); //rootEl의 타입을 캐스팅함
