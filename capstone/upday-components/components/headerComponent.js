import DOMPurify from 'dompurify';
class HeaderComponent extends HTMLElement {
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
    const sanitizedValue = DOMPurify.sanitize(newValue);
    if (name === 'src') {
      this.imgElement.setAttribute('src', sanitizedValue);
    } else if (name === 'title') {
      this.imgElement.setAttribute('title', sanitizedValue);
    } else if (name === 'label') {
      this.imgElement.setAttribute('label', sanitizedValue);
    } else if (name === 'size') {
      this.imgElement.setAttribute('size', sanitizedValue);
    } else if (name === 'class-prop') {
      this.contentElement.className = sanitizedValue;
    }
  }
}

customElements.define('header-component', HeaderComponent);
