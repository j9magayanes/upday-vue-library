class ArticleTitle extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const divElement = document.createElement('div');
    const style = document.createElement('style');
    
    style.textContent = `
      /* Add your styles here if needed */
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(divElement);

    this.contentElement = divElement;
  }

  static get observedAttributes() {
    return ['title', 'class-name', 'id'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class-name') {
      // Sanitize and validate class name if necessary
      this.contentElement.className = newValue;
    } else if (name === 'title') {
      // Sanitize and validate title attribute if necessary
      this.contentElement.setAttribute('title', newValue);
    } else if (name === 'id') {
      // Sanitize and validate id attribute if necessary
      this.contentElement.id = newValue;
    }
  }
}

customElements.define('article-title', ArticleTitle);
