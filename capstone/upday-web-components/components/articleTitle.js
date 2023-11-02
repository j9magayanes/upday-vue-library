class articleTitle extends HTMLElement {
    constructor() {
      super();
  
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      const container = document.createElement('div');
      container.classList.add('label'); // Add a class
      shadowRoot.appendChild(container);
  
      const textNode = document.createTextNode('Title');
      textNode.classList.add('title-text');
      container.appendChild(textNode);
  
      // Apply font color using CSS
      const style = document.createElement('style');
      style.textContent = `
      .label {
        height: 144px;
        width: 312px;
        }
        .label .title-text {
        color: #121212;
        font-family: "Inter-Bold", Helvetica;
        font-size: 28px;
        font-weight: 700;
        height: 144px;
        left: 0;
        letter-spacing: 0;
        line-height: 36.4px;
        position: fixed;
        top: 0;
        width: 312px;
        }
      `;
      shadowRoot.appendChild(style);
    }
  
    // Other methods and properties here
  }
  
  customElements.define('article-title', ArticleTitle);

  
  
  
  
  
  