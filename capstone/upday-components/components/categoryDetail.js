export class CategoryDetail extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
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
                </style>
                <div className="category">
                    <div className="TAG">
                        <div className="text-wrapper"><slot></slot></div>
                    </div>
                </div>
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
