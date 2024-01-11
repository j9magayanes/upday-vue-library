<<<<<<< Updated upstream
import DOMPurify from 'dompurify';
class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
                <style>
                </style>
                <h1>Test<h1/>
              `;
    this.imgElement = this.shadowRoot.querySelector('img');
=======
class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
>>>>>>> Stashed changes
  }

  static get observedAttributes() {
    return ['src', 'title', 'label', 'size', 'class-prop'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
<<<<<<< Updated upstream
    const sanitizedValue = DOMPurify.sanitize(newValue);
    if (name === 'src') {
      this.imgElement.setAttribute('src', sanitizedValue);
    } else if (name === 'title') {
      this.imgElement.setAttribute('title', sanitizedValue);
    } else if (name === 'label') {
      this.imgElement.setAttribute('label', sanitizedValue);
    } else if (name === 'size') {
      this.imgElement.setAttribute('size', sanitizedValue);
    } else if (name === 'class-prop') {
      this.contentElement.className = sanitizedValue;
    }
  }
=======
    if (this.shadowRoot) {
      if (name === 'src' || name === 'title' || name === 'label' || name === 'size') {
        this.render();
      } else if (name === 'class-prop') {
        this.render(newValue);
      }
    }
  }

  render(classProp) {
    const src = this.getAttribute('src') || '';
    const title = this.getAttribute('title') || '';
    const label = this.getAttribute('label') || '';
    const size = this.getAttribute('size') || '';

    this.shadowRoot.innerHTML = `
      <style>
        /* Add custom styles for the header component */
        /* Customize styles based on your requirements */
      </style>
      <div class="header-component ${classProp || ''}">
        <img src="${src}" alt="${title}" title="${title}" label="${label}" size="${size}">
        <h1>${title}</h1>
      </div>
    `;
  }
>>>>>>> Stashed changes
}

customElements.define('header-component', HeaderComponent);
