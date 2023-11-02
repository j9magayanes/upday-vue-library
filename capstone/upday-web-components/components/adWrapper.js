class AdWrapper extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
              
              <style>
              .ad-block {
                background-color: #f2f2f2;
                align-self: center;
                padding: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                transition: flex-grow ease-in-out 1s;
                margin: 16px 0;
                position: relative;
              }
              
              .grow {
                flex-grow: 1;
              }
              </style>
              <div class="ad-block grow">
              <slot>
              </slot>
              </div>
            `;


  }

  static get observedAttributes() {
    return ['class-prop'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
 
  if (name === 'class-prop') {
      this.contentElement.className = newValue;
    }
  }
}

customElements.define('ad-wrapper', AdWrapper);
