import { MemeCollection } from "./memeCollection.js";
export class Meme {
  constructor(id, name, image, dateModified) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.dateModified = dateModified;
  }

  show() {
    // console.log(`id ${this.id}
    // name ${this.name}
    // date ${this.dateModified}
    // `);
    let a = document.getElementById("meme-info");
    a.innerHTML = `<h1>${this.id}</h1>
          <p>${this.name}</p>
          <img src="${this.image}" alt="">
          <p>${this.dateModified}</p>`;
  }

  update(data) {
    this.name = data.name;
    this.image = data.image;
  }
}
