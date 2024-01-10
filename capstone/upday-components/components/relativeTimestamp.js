class RelativeTimestamp extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        /* Add any custom styles for the relative timestamp component */
        /* Customize styles based on your requirements */
      </style>
      <span><slot></slot></span>
    `;

    this.contentElement = this.shadowRoot.querySelector('span');
  }

  static get observedAttributes() {
    return ['class-prop', 'title', 'id'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class-prop') {
      // Validate and sanitize the class value
      const sanitizedValue = this.sanitizeInput(newValue);
      this.setAttribute(name, sanitizedValue);
      this.contentElement.className = sanitizedValue;
    } else if (name === 'title') {
      // Validate and sanitize the title value
      const sanitizedValue = this.sanitizeInput(newValue);
      this.setAttribute(name, sanitizedValue);
      this.contentElement.setAttribute('title', sanitizedValue);
    } else if (name === 'id') {
      // Validate and sanitize the id value
      const sanitizedValue = this.sanitizeInput(newValue);
      this.setAttribute(name, sanitizedValue);
      this.contentElement.id = sanitizedValue;
    }
  }

  sanitizeInput(value) {
    // Basic input validation - allow alphanumeric characters and some common symbols
    return value.replace(/[^a-zA-Z0-9\s_-]/g, '');
  }
}

customElements.define('relative-timestamp', RelativeTimestamp);
