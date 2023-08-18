export class ImageComponent extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
              
              <style>
                .counter-container {
                  display: flex;
                  align-items: center;
                }
                .counter-btn {
                  margin: 0 5px;
                  padding: 5px 10px;
                  font-size: 16px;
                  cursor: pointer;
                }
              </style>
              <img />
            `;

    this.imgElement = this.shadowRoot.querySelector('img');
  }

  static get observedAttributes() {
    return ['src', 'title', 'label', 'size'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'src') {
      this.imgElement.setAttribute('src', newValue);
    }
  }
}

customElements.define('image-component', ImageComponent);
