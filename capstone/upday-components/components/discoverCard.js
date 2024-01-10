class DiscoverCard extends HTMLElement {
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
