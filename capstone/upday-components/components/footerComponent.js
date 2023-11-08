class FooterComponent extends HTMLElement {
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
      this.link.setAttribute('class', newValue);
    } else if (name === 'text') {
      this.link.textContent = newValue;
    } else if (name === 'callback') {
      // Handle callback attribute change if needed
    } else if (name === 'href') {
      this.link.setAttribute('href', newValue);
    }
  }
}

customElements.define('footer-component', FooterComponent);
