export class ArticleImage extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
                <style>
                </style>
                <figure>
                <img/>
                <figcaption><figcaption/>
                <figure/>
              `;

    this.imgElement = this.shadowRoot.querySelector('img');
    this.figureElement = this.shadowRoot.querySelector('figure');
    this.figCaptionElement = this.shadowRoot.querySelector('figcaption');
  }

  static get observedAttributes() {
    return ['src', 'alt', 'imageRef', 'photoCaption', 'figureRef'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'src') {
      this.imgElement.setAttribute('src', newValue);
    } else if (name === 'alt') {
      this.imgElement.setAttribute('alt', newValue);
    } else if (name === 'imageRef') {
      this.imgElement.setAttribute('ref', newValue);
    } else if (name === 'figureRef') {
      this.figureElement.setAttribute('ref', newValue);
    } else if (name === 'photoCaption') {
      this.figCaptionElement.innerText = newValue;
    }
  }
}

customElements.define('article-image', ArticleImage);
