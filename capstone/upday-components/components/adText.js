class AdText extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

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
                    left: 0;
                    letter-spacing: 0;
                    line-height: 14px;
                    position: fixed;
                    text-align: center;
                    top: 0;
                    white-space: nowrap;
                    }
                  </style>
                  <div className="label">
                  <div  className="story-continues"><slot></slot></div>
                  </div>
                `;
    this.textContent = this.shadowRoot.querySelector('slot');
  }

  static get observedAttributes() {
    return ['text', 'class-prop'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class-prop') {
      this.contentElement.class = newValue;
    } else if (name === 'text') {
      this.textContent.setAttribute('text', newValue);
    }
  }
}

customElements.define('ad-text', AdText);
