<<<<<<< Updated upstream
class RecommendationComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['src', 'title', 'label', 'size', 'class-prop'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (
      name === 'src' ||
      name === 'title' ||
      name === 'label' ||
      name === 'size'
    ) {
      // Validate and sanitize attribute values
      const sanitizedValue = this.sanitizeInput(newValue);
      this.setAttribute(name, sanitizedValue);
      this.render();
    } else if (name === 'class-prop') {
      // Validate and sanitize the class value
      const sanitizedValue = this.sanitizeInput(newValue);
      this.setAttribute(name, sanitizedValue);
      this.render(newValue);
    }
  }

  render(classProp) {
    const src = this.getAttribute('src') || '';
    const title = this.getAttribute('title') || '';
    const label = this.getAttribute('label') || '';
    const size = this.getAttribute('size') || '';

    this.shadowRoot.innerHTML = `
      <style>
        /* Add custom styles for the recommendation component */
        /* Customize styles based on your requirements */
      </style>
      <div class="recommendation-component ${classProp || ''}">
        <img src="${src}" alt="${title}" title="${title}" label="${label}" size="${size}">
        <h1>${title}</h1>
      </div>
    `;
  }

  sanitizeInput(value) {
    // Basic input validation - allow alphanumeric characters and some common symbols
    return value.replace(/[^a-zA-Z0-9\s_-]/g, '');
  }
}

customElements.define('recommendation-component', RecommendationComponent);
=======
class asComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    static get observedAttributes() {
      return ['src', 'title', 'label', 'size', 'class-prop'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'src' || name === 'title' || name === 'label' || name === 'size') {
        this.render();
      } else if (name === 'class-prop') {
        this.render(newValue);
      }
    }
  
    render(classProp) {
      const src = this.getAttribute('src') || '';
      const title = this.getAttribute('title') || '';
      const label = this.getAttribute('label') || '';
      const size = this.getAttribute('size') || '';
      
      this.shadowRoot.innerHTML = `
        <style>
          /* Add custom styles for the header component */
          /* Customize styles based on your requirements */
        </style>
        <div class="header-component ${classProp || ''}">
          <img src="${src}" alt="${title}" title="${title}" label="${label}" size="${size}">
          <h1>${title}</h1>
        </div>
      `;
    }
  }
  
  customElements.define('ad-component', AdComponent);
  
>>>>>>> Stashed changes
