class AdText extends HTMLElement {
  constructor() {
    super();
<<<<<<< Updated upstream

    this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = `
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
    `;

    const container = document.createElement('div');
    container.classList.add('label');

    const slotContainer = document.createElement('div');
    slotContainer.classList.add('story-continues');

    container.appendChild(slotContainer);
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(container);
=======
    this.attachShadow({ mode: 'open' });
    this.render();
>>>>>>> Stashed changes
  }

  static get observedAttributes() {
    return ['text', 'class-prop'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class-prop') {
<<<<<<< Updated upstream
      this.shadowRoot.querySelector('.label').classList = newValue;
    } else if (name === 'text') {
      this.shadowRoot.querySelector('.story-continues').textContent = newValue;
    }
  }
=======
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
>>>>>>> Stashed changes
}

customElements.define('ad-text', AdText);
