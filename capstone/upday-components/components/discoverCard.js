class DiscoverCard extends HTMLElement {
<<<<<<< Updated upstream
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        /* Add your styles here */
      </style>
      <div>
        <slot></slot>
      </div>
    `;

    this.contentElement = this.shadowRoot.querySelector('div');
  }

  static get observedAttributes() {
    return ['class-prop'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class-prop') {
      // Ensure that the contentElement is defined before setting the class
      if (this.contentElement) {
        this.contentElement.className = newValue;
      }
    }
  }
}

customElements.define('discover-card', DiscoverCard);
=======
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    static get observedAttributes() {
      return ['img-src', 'heading1', 'heading2'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      this.render();
    }
  
    render() {
      const imgSrc = this.getAttribute('img-src') || '';
      const heading1 = this.getAttribute('heading1') || 'Heading 1';
      const heading2 = this.getAttribute('heading2') || 'Heading 2';
  
      this.shadowRoot.innerHTML = `
        <style>
          /* Add custom styles for Discover Card component */
          /* Customize styles based on your requirements */
        </style>
        <div class="discover-card">
          <img src="${imgSrc}" alt="Discover Card Image">
          <h1>${heading1}</h1>
          <h2>${heading2}</h2>
        </div>
      `;
    }
  }
  
  customElements.define('discover-card', DiscoverCard);
  
>>>>>>> Stashed changes
