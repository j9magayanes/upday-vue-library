class TabComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        /* Your existing styles remain unchanged */
      </style>
      <li>
        <a>
          <slot></slot>
        </a>
      </li>
    `;

    this.linkComponent = this.shadowRoot.querySelector('a');
    this.listComponent = this.shadowRoot.querySelector('li');
  }

  static get observedAttributes() {
    return [
      'class-list',
      'class-link',
      'ref-link',
      'aria-label',
      'href',
      'pointerdown',
      'role',
      'text',
      'active',
    ];
  }

  sanitizeInput(value) {
    // Implement basic input validation/sanitization logic
    return value.replace(/[^a-zA-Z0-9\s_-]/g, '');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Attribute changed:', name, 'Old value:', oldValue, 'New value:', newValue);
    if (name === 'class-list') {
      this.listComponent.setAttribute('class', this.sanitizeInput(newValue));
    } else if (name === 'class-link') {
      this.linkComponent.setAttribute('class', this.sanitizeInput(newValue));
    } else if (name === 'ref-link') {
      this.linkComponent.setAttribute('ref', this.sanitizeInput(newValue));
    } else if (name === 'aria-label') {
      this.linkComponent.setAttribute('aria-label', this.sanitizeInput(newValue));
    } else if (name === 'href') {
      this.linkComponent.href = this.sanitizeInput(newValue);
    } else if (name === 'role') {
      this.linkComponent.setAttribute('role', this.sanitizeInput(newValue));
    } else if (name === 'pointerdown') {
      this.linkComponent.addEventListener('pointerdown', () => {
        console.log('test');
        // Additional security checks or actions if needed
      });
    } else if (name === 'text') {
      this.linkComponent.textContent = this.sanitizeInput(newValue);
    } else if (name === 'active') {
      if (newValue === 'true' || newValue === '') {
        this.setAttribute('active', '');
      } else {
        this.removeAttribute('active');
      }
    }
  }
}

customElements.define('tab-component', TabComponent);
