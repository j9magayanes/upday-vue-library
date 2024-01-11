class DiscoverFurther extends HTMLElement {
<<<<<<< Updated upstream
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        /* Add your styles here */
      </style>
      <h1><slot></slot></h1>
    `;

    this.contentElement = this.shadowRoot.querySelector('h1');
  }

  static get observedAttributes() {
    return ['class-prop', 'title', 'id'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class-prop') {
      // Ensure that the contentElement is defined before setting the class
      if (this.contentElement) {
        this.contentElement.className = newValue;
      }
    } else if (name === 'title') {
      // Sanitize the title value before setting it
      this.contentElement.setAttribute('title', sanitizeTitleValue(newValue));
    } else if (name === 'id') {
      // Sanitize the id value before setting it
      this.contentElement.id = sanitizeIdValue(newValue);
    }
  }
}

customElements.define('discover-further', DiscoverFurther);

// Example sanitization functions
function sanitizeTitleValue(value) {
  // Remove any HTML tags to prevent script injection
  return value.replace(/<[^>]*>/g, '');
}

function sanitizeIdValue(value) {
  // Ensure that the value consists only of alphanumeric characters, dashes, or underscores
  return value.replace(/[^a-zA-Z0-9-_]/g, '');
}   
=======
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    static get observedAttributes() {
      return ['text', 'class-prop'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'class-prop') {
        this.render(newValue);
      } else if (name === 'text') {
        this.render(null, newValue);
      }
    }
  
    render(classProp, text) {
      this.shadowRoot.innerHTML = `
        <style>
          .label {
            height: 14px;
            width: 223px;
          }
          .label .story-continues {
            color: #9c9c9c;
            font-family: "Inter-Bold", Helvetica;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0;
            line-height: 14px;
            text-align: center;
            white-space: nowrap;
          }
        </style>
        <div class="label ${classProp || ''}">
          <div class="story-continues">${text || ''}</div>
        </div>
      `;
    }
  }
  
  customElements.define('discover-further', DiscoverFurther);
  
>>>>>>> Stashed changes
