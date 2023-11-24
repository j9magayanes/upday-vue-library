export class ImageComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
              <style>
              .mobile {
                background-position: 50% 50%;
                background-size: cover;
                height: 204px;
                position: relative;
                width: 360px;
              }
              </style>
              <img class="mobile"/>
            `;

    this.imgElement = this.shadowRoot.querySelector('img');
  }

  static get observedAttributes() {
    return ['src', 'title', 'label', 'size', 'class-prop'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'src') {
      this.imgElement.setAttribute('src', newValue);
    } else if (name === 'title') {
      this.imgElement.setAttribute('title', newValue);
    } else if (name === 'label') {
      this.imgElement.setAttribute('label', newValue);
    } else if (name === 'size') {
      this.imgElement.setAttribute('size', newValue);
    } else if (name === 'class-prop') {
      this.contentElement.className = newValue;
    }
  }
}

customElements.define('image-component', ImageComponent);
