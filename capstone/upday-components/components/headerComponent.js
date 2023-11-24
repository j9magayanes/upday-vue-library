export class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
                <style>
                </style>
                <h1>Test<h1/>
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

customElements.define('header-component', HeaderComponent);
