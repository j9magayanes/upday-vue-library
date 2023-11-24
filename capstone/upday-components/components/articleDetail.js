export class ArticleDetail extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
                <style>
                </style>
                <div></div>
              `;

    this.contentElement = this.shadowRoot.querySelector('div');
  }

  static get observedAttributes() {
    return ['className', 'text'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'className') {
      this.contentElement.classList = newValue;
    } else if (name === 'text') {
      this.contentElement.innerText = newValue;
    }
  }
}

customElements.define('article-detail', ArticleDetail);
