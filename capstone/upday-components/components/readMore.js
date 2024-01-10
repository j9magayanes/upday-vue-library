class ReadMore extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        /* Add your styles here if needed */
      </style>
      <div><span><slot></slot></span></div>
    `;

    this.contentElement = this.shadowRoot.querySelector('div');
  }

  static get observedAttributes() {
    return ['class-prop', 'title', 'id'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class-prop') {
      // Validate and sanitize the class value
      if (/^[a-zA-Z0-9\s_-]+$/.test(newValue)) {
        this.contentElement.className = newValue;
      }
    } else if (name === 'title') {
      // Validate and sanitize the title value
      if (/^[a-zA-Z0-9\s_-]+$/.test(newValue)) {
        this.contentElement.setAttribute('title', newValue);
      }
    } else if (name === 'id') {
      // Validate and sanitize the id value
      if (/^[a-zA-Z0-9_-]+$/.test(newValue)) {
        this.contentElement.id = newValue;
      }
    }
  }
}

customElements.define('read-more', ReadMore);
