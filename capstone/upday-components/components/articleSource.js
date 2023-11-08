class ArticleSource extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
              
              <style>
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
                  left: 0;
                  letter-spacing: 0;
                  line-height: 16.8px;
                  position: fixed;
                  top: 0;
                  width: 312px;
              }
              
            
              </style>
              <div class="source">
              <div class="source-name"><slot></slot></div>
              </div>
            `;
            this.textContent = this.shadowRoot.querySelector('.source-name');


  }

  static get observedAttributes() {
    return ['class-prop', 'text'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
 
  if (name === 'class-prop') {
      this.contentElement.className = newValue;
    }  else if (name === 'text') {
      this.textContent.setAttribute('text', newValue);
    }
  }
}

customElements.define('article-source', ArticleSource);
