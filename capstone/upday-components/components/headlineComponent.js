import sanitizeCss from 'sanitize-css-value';

class HeadlineComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['custom-style'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'custom-style') {
      this.applyCustomStyle(newValue);
    }
  }

  applyCustomStyle(css) {
  
    const sanitizedCss = sanitizeCss(css);
    this.shadowRoot.innerHTML = `<style>${sanitizedCss}</style>`;
  }

  connectedCallback() {
    // Initial rendering logic goes here
  }
}

customElements.define('headline-component', HeadlineComponent);
