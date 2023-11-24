class TabComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        li {
          display: flex;
          align-items: center;
          height: 5.1em;
          flex-shrink: 0;
          flex-grow: 0;
          text-decoration: none;
          padding-right: 0.1em;
        }
        a {
          border-radius: 38px;
          text-decoration: none;
          cursor: pointer;
          text-align: center;
          color: #555;
          font-size: 2em;
          text-transform: uppercase;
          min-height: 2.2em;
          padding: 0.1em 0.5em;
          border: 1px solid transparent;
          display: flex;
          align-items: center;
        }
        li .active a {
          font-weight: 700;
          background-color: rgba(0, 0, 0, 0.05);
          text-decoration: none;
          color: var(--font);
          letter-spacing: -0.5px;
        }
        @media (prefers-color-scheme: dark) {
          a {
            color: white;
            text-decoration: none;
          }
          :li .active a {
            background-color: rgba(256, 256, 256, 0.2);
            text-decoration: none;
          }
        }
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
      'pointer-down',
      'href',
      'role',
      'text',
      'active',
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class-list') {
      this.listComponent.setAttribute('class', newValue);
    } else if (name === 'class-link') {
      this.linkComponent.setAttribute('class', newValue);
    } else if (name === 'ref-link') {
      this.linkComponent.setAttribute('ref', newValue);
    } else if (name === 'aria-label') {
      this.linkComponent.setAttribute('aria-label', newValue);
    } else if (name === 'pointer-down') {
      this.linkComponent.addEventListener('pointerdown', () => {
        // Your pointer-down event handling logic
      });
    } else if (name === 'href') {
      this.linkComponent.href = newValue;
    } else if (name === 'role') {
      this.linkComponent.setAttribute('role', newValue);
    } else if (name === 'text') {
      this.linkComponent.textContent = newValue;
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
