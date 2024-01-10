class SimpleList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <footer class='padded-lr'>
        <ul>
          <li>
            <a>
              <slot></slot>
            </a>
          </li>
        </ul>
        <p>Copyright 2023, upday GmbH & Co. KG</p>
      </footer>
    `;

    this.link = this.shadowRoot.querySelector('a');
  }

  static get observedAttributes() {
    return ['class-prop', 'text', 'callback', 'href'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class-prop') {
      // Validate and sanitize the class value
      const sanitizedValue = this.sanitizeInput(newValue);
      this.setAttribute(name, sanitizedValue);
      this.link.setAttribute('class', sanitizedValue);
    } else if (name === 'text') {
      // Validate and sanitize the text value
      const sanitizedValue = this.sanitizeInput(newValue);
      this.setAttribute(name, sanitizedValue);
      this.link.textContent = sanitizedValue;
    } else if (name === 'callback') {
      // Handle the callback attribute securely (e.g., validate against allowed values)
      if (this.isValidCallback(newValue)) {
        this.setAttribute(name, newValue);
        // Execute the callback function here
        this.executeCallback();
      } else {
        console.error('Invalid callback value:', newValue);
      }
    } else if (name === 'href') {
      // Validate and sanitize the href value
      const sanitizedValue = this.sanitizeInput(newValue);
      this.setAttribute(name, sanitizedValue);
      this.link.setAttribute('href', sanitizedValue);
    }
  }

  sanitizeInput(value) {
    // Basic input validation - allow alphanumeric characters and some common symbols
    return value.replace(/[^a-zA-Z0-9\s_-]/g, '');
  }

  isValidCallback(callback) {
    // Implement logic to validate the callback value (e.g., against a predefined list)
    return true; // Replace with your validation logic
  }

  executeCallback() {
    // Implement logic to execute the callback function
    console.log('Callback executed');
  }
}

customElements.define('simple-list', SimpleList);
