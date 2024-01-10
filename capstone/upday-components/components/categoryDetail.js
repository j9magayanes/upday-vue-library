class CategoryDetail extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const divElement = document.createElement('div');
    divElement.classList.add('categoryDetail');

    const style = document.createElement('style');
    style.textContent = `
      .categoryDetail {
        color: gray;
        font-size: 0.75rem;
        padding-bottom: 12px;
        padding-top: 12px;
        font-family: "Roboto";
      }
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(divElement);

    this.contentElement = divElement;
  }

  static get observedAttributes() {
    return ['category', 'class-prop'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class-prop') {
      // Sanitize and validate class name if necessary
      this.contentElement.className = newValue;
    } else if (name === 'category') {
      // Sanitize and validate category attribute if necessary
      this.contentElement.setAttribute('category', newValue);
    }
  }
}

customElements.define('category-detail', CategoryDetail);
