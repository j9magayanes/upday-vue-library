class ArticleTitle extends HTMLElement {
  constructor() {
    super();
<<<<<<< Updated upstream

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
=======

    const shadowRoot = this.attachShadow({ mode: 'open' });

    // Create the container div
    const container = document.createElement('div');
    container.className = 'label';

    // Create the text node with the title content
    const textNode = document.createTextNode('Title');
    textNode.className = 'title-text';

    // Apply styles using template literals
    const style = document.createElement('style');
    style.textContent = `
      .label {
        height: 144px;
        width: 312px;
        position: relative;
      }
      .title-text {
        color: #121212;
        font-family: "Inter-Bold", Helvetica;
        font-size: 28px;
        font-weight: 700;
        height: 144px;
        line-height: 36.4px;
        position: absolute;
        top: 0;
        left: 0;
      }
    `;

    // Append the elements to the shadow DOM
    shadowRoot.appendChild(container);
    container.appendChild(textNode);
    shadowRoot.appendChild(style);
  }

  // Other methods and properties here
>>>>>>> Stashed changes
}

customElements.define('article-title', ArticleTitle);
