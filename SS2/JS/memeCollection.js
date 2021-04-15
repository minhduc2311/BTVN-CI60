import { Meme } from "./meme.js";

export class MemeCollection extends Meme {
  constructor(id, name, owner, memes) {
    super(id, name);
    this.owner = owner;
    this.memes = memes;
  }
  add(meme) {
    if (meme instanceof Meme) {
      this.memes.push(meme);
    } else {
      this.memes.push = "";
    }
  }

  update(id, data) {
    for (let i = 0; i < this.memes.length; i++) {
      if (this.memes[i].id == id) {
        this.memes[i].name = data.name;
        // this.image[i].image = data.image;
        this.memes[i].dateModified = data.dateModified;
      } else {
        console.log('false');
      }
    }
  }

  delete(id) {
    for (let i = 0; i < this.memes.length; i++) {
      if (this.memes[i].id == id) {
        this.memes.splice(i, 1)
      } else {
        console.log('false');
      }
    }
  }
  
  show() {
    for (let i = 0; i < this.memes.length; i++) {
      console.log(this.memes[i]);
    }
  }
}
