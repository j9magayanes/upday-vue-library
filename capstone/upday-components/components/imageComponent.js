class ImageComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
<<<<<<< Updated upstream

    this.shadowRoot.innerHTML = `
      <style>
        .mobile {
          background-position: 50% 50%;
          background-size: cover;
          height: 204px;
          position: relative;
          width: 360px;
        }
      </style>
      <img class="mobile" />
    `;

    this.imgElement = this.shadowRoot.querySelector('img');
=======
    this.render();
>>>>>>> Stashed changes
  }

  static get observedAttributes() {
    return ['src', 'title', 'label', 'size', 'class-prop'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
<<<<<<< Updated upstream
    if (name === 'src') {
      this.imgElement.setAttribute('src', newValue);
    } else if (name === 'title') {
      this.imgElement.setAttribute('title', newValue);
    } else if (name === 'label') {
      this.imgElement.setAttribute('label', newValue);
    } else if (name === 'size') {
      this.imgElement.setAttribute('size', newValue);
    } else if (name === 'class-prop') {
      this.imgElement.className = newValue; // Fix: use imgElement instead of contentElement
=======
    if (this.shadowRoot) {
      if (name === 'src') {
        this.imgElement.src = newValue;
      } else if (name === 'title') {
        this.imgElement.title = newValue;
      } else if (name === 'label') {
        this.imgElement.setAttribute('aria-label', newValue);
      } else if (name === 'size') {
        this.imgElement.style.width = newValue;
        this.imgElement.style.height = 'auto';
      } else if (name === 'class-prop') {
        this.render(newValue);
      }
>>>>>>> Stashed changes
    }
  }

  render(classProp) {
    this.shadowRoot.innerHTML = `
      <style>
        /* Add custom styles for the image component */
        .mobile {
          background-position: 50% 50%;
          background-size: cover;
          height: 100%;
          width: 100%;
        }
        ${classProp || ''}
      </style>
      <img class="mobile">
    `;

    this.imgElement = this.shadowRoot.querySelector('img');
  }
}

customElements.define('image-component', ImageComponent);
