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
              <span class="source-name">
              </span>
            `;
            this.articleSource = this.shadowRoot.querySelector('span');


  }

  static get observedAttributes() {
    return ['className', 'text'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
 
  if (name === 'className') {
    this.articleSource.classList.add(newValue);
    }  else if (name === 'text') {
      this.articleSource.innerText = newValue;
    }
  }
}

customElements.define('article-source', ArticleSource);
