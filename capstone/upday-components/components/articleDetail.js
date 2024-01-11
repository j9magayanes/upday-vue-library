class ArticleDetail extends HTMLElement {
  constructor() {
    super();
<<<<<<< Updated upstream

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

=======
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['class-prop', 'title', 'id'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class-prop') {
      this.contentElement.className = newValue;
    } else if (name === 'title') {
      this.contentElement.title = newValue;
    } else if (name === 'id') {
      this.contentElement.id = newValue;
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Add custom styles for the article detail */
        /* Customize styles based on your requirements */
      </style>
      <p><slot></slot></p>
    `;
    this.contentElement = this.shadowRoot.querySelector('p');
  }
}

>>>>>>> Stashed changes
customElements.define('article-detail', ArticleDetail);
