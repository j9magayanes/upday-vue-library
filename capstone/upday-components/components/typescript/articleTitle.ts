class ArticleTitle extends HTMLElement {
    private contentElement: HTMLHeadingElement;
  
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <style>
          /* Add your styles here */
        </style>
        <h1><slot></slot></h1>
      `;
  
      this.contentElement = this.shadowRoot.querySelector('h1')!;
    }
  
    static get observedAttributes(): string[] {
      return ['title', 'class', 'id'];
    }
  
    attributeChangedCallback(name: string, _oldValue: string, newValue: string | null) {
      if (name === 'class') {
        this.contentElement.className = newValue || '';
      } else if (name === 'title') {
        this.contentElement.setAttribute('title', newValue || '');
      } else if (name === 'id') {
        this.contentElement.id = newValue || '';
      }
    }
  }
  
  customElements.define('article-title', ArticleTitle);
  