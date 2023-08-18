

class ArticleDetail extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
                
                <style>
               
                </style>
                <p></p>
              `;
  


    this.contentElement = this.shadowRoot.querySelector('p');
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
  
  customElements.define('article-detail', ArticleDetail);

 