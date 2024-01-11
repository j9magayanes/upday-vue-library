class CategoryDetail extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
<<<<<<< Updated upstream

    const divElement = document.createElement('div');
    divElement.classList.add('categoryDetail');

    const style = document.createElement('style');
    style.textContent = `
      .categoryDetail {
        color: gray;
        font-size: 0.75rem;
        padding-bottom: 12px;
        padding-top: 12px;
        font-family: "Roboto";
      }
    `;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(divElement);

    this.contentElement = divElement;
=======
    this.render();
>>>>>>> Stashed changes
  }

  static get observedAttributes() {
    return ['category', 'class-prop'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'class-prop') {
<<<<<<< Updated upstream
      // Sanitize and validate class name if necessary
      this.contentElement.className = newValue;
    } else if (name === 'category') {
      // Sanitize and validate category attribute if necessary
      this.contentElement.setAttribute('category', newValue);
=======
      this.render(newValue);
    } else if (name === 'category') {
      this.render(null, newValue);
>>>>>>> Stashed changes
    }
  }

  render(classProp, category) {
    this.shadowRoot.innerHTML = `
      <style>
        .category {
          align-items: flex-start;
          display: flex;
          gap: 4px;
          height: 15px;
          padding: 0px 24px;
          position: relative;
          width: 360px;
        }
        .category .TAG {
          align-items: center;
          display: inline-flex;
          flex: 0 0 auto;
          gap: 30px;
          justify-content: center;
          position: relative;
        }
        .category .text-wrapper {
          color: #7f7f7f;
          font-family: "Inter-Bold", Helvetica;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0;
          line-height: 14.4px;
          margin-top: -1px;
          position: relative;
          text-align: center;
          white-space: nowrap;
          width: fit-content;
        }
        ${classProp || ''}
      </style>
      <div class="category">
        <div class="TAG">
          <div class="text-wrapper">${category || ''}</div>
        </div>
      </div>
    `;
  }
}

customElements.define('category-detail', CategoryDetail);
