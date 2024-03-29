class HeroImage extends HTMLElement {
<<<<<<< Updated upstream
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
      <img />
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
      this.imgElement.className = newValue; // Fix: use imgElement instead of contentElement
    }
  }
}

customElements.define('hero-image', HeroImage);
=======
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
      const style = document.createElement('style');
      style.textContent = css;
      this.shadowRoot.appendChild(style);
    }
  
    connectedCallback() {
      // Initial rendering logic goes here
    }
  }
  
  customElements.define('hero-image', HeroImage);
  
>>>>>>> Stashed changes
