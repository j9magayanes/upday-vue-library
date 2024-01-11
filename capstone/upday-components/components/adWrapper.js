class AdWrapper extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
<<<<<<< Updated upstream

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
=======
    this.render();
>>>>>>> Stashed changes
  }

  static get observedAttributes() {
    return ['class-prop'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class-prop') {
<<<<<<< Updated upstream
      this.contentElement.className = newValue;
=======
      this.render(newValue);
>>>>>>> Stashed changes
    }
  }

  render(classProp) {
    this.shadowRoot.innerHTML = `
      <style>
        /* Add custom styles for the ad wrapper */
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
        ${classProp || ''}
      </style>
      <div class="ad-block grow">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('ad-wrapper', AdWrapper);
