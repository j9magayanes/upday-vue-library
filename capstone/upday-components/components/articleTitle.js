

export class ArticleTitle extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
              
              <style>
             
              </style>
              <h1><slot></slot></h1>
            `;



  this.contentElement = this.shadowRoot.querySelector('p');
}

  static get observedAttributes() {
    return ['title', 'className', 'id'];
  }




  attributeChangedCallback(name, oldValue, newValue) {
 
  if (name === 'className') {
      this.contentElement.className = newValue;
    } else if (name === 'title') {
      this.contentElement.setAttribute('title', newValue);
    } else if (name === 'id') {
      this.contentElement.id = newValue;
    } 
  }
}

customElements.define('article-title', ArticleTitle);

