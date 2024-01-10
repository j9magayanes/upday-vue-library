class DiscoverFurther extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        /* Add your styles here */
      </style>
      <h1><slot></slot></h1>
    `;

    this.contentElement = this.shadowRoot.querySelector('h1');
  }

  static get observedAttributes() {
    return ['class-prop', 'title', 'id'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class-prop') {
      // Ensure that the contentElement is defined before setting the class
      if (this.contentElement) {
        this.contentElement.className = newValue;
      }
    } else if (name === 'title') {
      // Sanitize the title value before setting it
      this.contentElement.setAttribute('title', sanitizeTitleValue(newValue));
    } else if (name === 'id') {
      // Sanitize the id value before setting it
      this.contentElement.id = sanitizeIdValue(newValue);
    }
  }
}

customElements.define('discover-further', DiscoverFurther);

// Example sanitization functions
function sanitizeTitleValue(value) {
  // Remove any HTML tags to prevent script injection
  return value.replace(/<[^>]*>/g, '');
}

function sanitizeIdValue(value) {
  // Ensure that the value consists only of alphanumeric characters, dashes, or underscores
  return value.replace(/[^a-zA-Z0-9-_]/g, '');
}   