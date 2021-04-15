import { MemeCollection } from "./memeCollection.js";
import { Meme } from "./meme.js";

let meme_1 = new Meme(
  "#1",
  "Cheems",
  "https://i.pinimg.com/originals/89/59/2b/89592b3392fee110134235e95d80dbf7.jpg",
  new Date()
);
let meme_2 = new Meme(
  "#2",
  "Disappointed",
  "https://photo-baomoi.zadn.vn/w720x480/2019_08_18_20_31872184/00ed1fffffbf16e14fae.jpg",
  new Date()
);
let meme_3 = new Meme(
  "#3",
  "Doge",
  "https://cryptodailycdn.ams3.cdn.digitaloceanspaces.com/doge-meme.jpg",
  new Date()
);

meme_3.update({
  name: "confused",
  image:
    "https://kenh14cdn.com/thumb_w/660/203336854389633024/2020/12/21/confusednickyoung-16085260310741369924969.jpg",
});
meme_3.show(); // show dang HTML cua meme

let memeCollection_1 = new MemeCollection("C1", "New Memes", "Duc", []);

memeCollection_1.add(meme_1);
memeCollection_1.add(meme_3);
memeCollection_1.show(meme_1); // console log thong tin meme trong collection

console.log(memeCollection_1);

memeCollection_1.update("#1", {
  name: "a",
  image: "https://semaster.vn/wp-content/uploads/2020/03/meme-la-gi.jpeg",
  dateModified: "02",
});

console.log(memeCollection_1);
