class CategoryDetail extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
                <style>
                  .categoryDetail {
                    color: gray;
                    font-size: .75rem !important;
                    padding-bottom: 12px;
                    padding-top: 12px;
                    font-family: "Roboto";
                  }
                </style>
                <div class="categoryDetail"><slot></slot></div>
              `;
  }

  static get observedAttributes() {
    return ['category', 'class-prop'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class-prop') {
      this.contentElement.class = newValue;
    } else if (name === 'category') {
      this.imgElement.setAttribute('category', newValue);
    }
  }
}

customElements.define('category-detail', CategoryDetail);
