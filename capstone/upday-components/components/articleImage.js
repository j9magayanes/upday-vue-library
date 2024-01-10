class ArticleImage extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const figureElement = document.createElement('figure');
    const imgElement = document.createElement('img');
    const figCaptionElement = document.createElement('figcaption');

    this.shadowRoot.appendChild(document.createElement('style')).textContent = `
      /* Add your styles here if needed */
    `;

    figureElement.appendChild(imgElement);
    figureElement.appendChild(figCaptionElement);
    this.shadowRoot.appendChild(figureElement);

    this.imgElement = imgElement;
    this.figureElement = figureElement;
    this.figCaptionElement = figCaptionElement;
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
      // Sanitize and validate 'ref' input if necessary
      this.imgElement.setAttribute('ref', newValue);
    } else if (name === 'figureRef') {
      // Sanitize and validate 'ref' input if necessary
      this.figureElement.setAttribute('ref', newValue);
    } else if (name === 'photoCaption') {
      // Set text content using textContent
      this.figCaptionElement.textContent = newValue;
    }
  }
}

customElements.define('article-image', ArticleImage);
