class ReadMore extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
                <style>
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
      this.contentElement.className = newValue;
    } else if (name === 'title') {
      this.contentElement.setAttribute('title', newValue);
    } else if (name === 'id') {
      this.contentElement.id = newValue;
    }
  }
}

customElements.define('read-more', ReadMore);
