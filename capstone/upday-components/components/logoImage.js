class LogoImage extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
                  <style>
                  </style>
                  <a></a>
                `;
  
      this.logoElement = this.shadowRoot.querySelector('a');
    }
  
    static get observedAttributes() {
      return ['href', 'target', 'ariaLabel', 'className'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'href') {
        this.imgElement.setAttribute('href', newValue);
      } else if (name === 'target') {
        this.imgElement.setAttribute('target', newValue);
      } else if (name === 'className') {
        this.imgElement.setAttribute('class', newValue);
      } else if (name === 'ariaLabel') {
        this.figureElement.setAttribute('aria-label', newValue);
      }
    }
  }
  
  customElements.define('logo-image', LogoImage);
  