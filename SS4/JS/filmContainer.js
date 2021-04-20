const $template = document.createElement("template");
$template.innerHTML = `
<div class="film-container">
            <div class="film-image">
                <div class="film-type">HD-Vietsub</div>
            </div>
            <div class="film-info">
                <div class="film-originalname">Bastardia Kunth</div>
                <div class="film-name">Bastardia</div>
                <div class="film-duration">120 phut</div>
            </div>
    </div>
`;

export default class FilmContainer extends HTMLElement {
  constructor() {
    super();
    this.appendChild($template.content.cloneNode(true));

    this.$originalName = this.querySelector(".film-originalname");
    this.$name = this.querySelector(".film-name");
    this.$image = this.querySelector(".film-image");
    this.$duration = this.querySelector(".film-duration");
    this.$type = this.querySelector(".film-type");
  }

  static get observedAttributes() {
    return ["original-name", "name", "image", "duration", "type"];
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName == "original-name") {
      this.$originalName.innerHTML = newValue;
    } else if (attrName == "name") {
      this.$name.innerHTML = newValue;
    } else if (attrName == "image") {
      this.$image.style.backgroundImage = `url(${newValue})`;
    } else if (attrName == "duration") {
      this.$duration.innerHTML = newValue + "phut";
    } else if (attrName == "type") {
      this.$type.innerHTML = newValue;
    }
  }
}

window.customElements.define("film-container", FilmContainer);
