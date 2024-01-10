class ArticleDetail extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const container = document.createElement('div');

    const style = document.createElement('style');
    style.textContent = `
      /* Add your styles here if needed */
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(container);

    this.contentElement = container;
  }

  static get observedAttributes() {
    return ['class-name', 'text'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class-name') {
      // Remove existing classes and add the new class
      this.contentElement.className = '';
      this.contentElement.classList.add(newValue);
    } else if (name === 'text') {
      // Set text content using textContent
      this.contentElement.textContent = newValue;
    }
  }
}

customElements.define('article-detail', ArticleDetail);
