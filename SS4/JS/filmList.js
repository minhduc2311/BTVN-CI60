import FilmContainer from "./filmContainer.js";

let $template = document.createElement("template");
$template.innerHTML = `
<div class='film-list'>
    <film-container></film-container>
    <film-container></film-container>
    <film-container></film-container>
    <film-container></film-container>
</div>
`;

export default class FilmList extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));
    this.$list = this.querySelector(".film-list");
  }

  static get observedAttributes() {
    return ["films"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "films") {
      console.log(newValue);
      let data = JSON.parse(newValue);

      for (let filmData of data) {
        let $filmContainer = new FilmContainer();
        $filmContainer.setAttribute("id", filmData.id);
        $filmContainer.setAttribute("original-name", filmData.originalName);
        $filmContainer.setAttribute("name", filmData.name);
        $filmContainer.setAttribute("image", filmData.image);
        $filmContainer.setAttribute("duration", filmData.duration);
        $filmContainer.setAttribute("type", filmData.type);

        this.$list.appendChild($filmContainer);
      }
    }
  }
}

window.customElements.define("film-list", FilmList);
