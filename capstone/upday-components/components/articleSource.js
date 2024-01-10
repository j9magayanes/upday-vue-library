class ArticleSource extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const spanElement = document.createElement('span');

    const style = document.createElement('style');
    style.textContent = `
      .source {
        height: 17px;
        width: 312px;
        background-color: #f2f2f2;
      }
      .source .source-name {
        background-color: #f2f2f2;
        color: #7f7f7f;
        font-family: "Inter-Bold", Helvetica;
        font-size: 12px;
        font-weight: 700;
        height: 17px;
        width: 100%;
      }
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(spanElement);

    this.articleSource = spanElement;
  }

  static get observedAttributes() {
    return ['class-name', 'text'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class-name') {
      // Sanitize and validate class name if necessary
      this.articleSource.classList.add(newValue);
    } else if (name === 'text') {
      // Set text content using textContent
      this.articleSource.textContent = newValue;
    }
  }
}

customElements.define('article-source', ArticleSource);
