class RecommendationComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['src', 'title', 'label', 'size', 'class-prop'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (
      name === 'src' ||
      name === 'title' ||
      name === 'label' ||
      name === 'size'
    ) {
      this.render();
    } else if (name === 'class-prop') {
      this.render(newValue);
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
}

customElements.define('recommendation-component', RecommendationComponent);
