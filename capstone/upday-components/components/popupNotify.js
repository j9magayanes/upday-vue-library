export class PopupNotify extends HTMLElement {
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
                <div class="counter-container">
                    <h1>Test</h1>
                </div>
              `;
  }
}

customElements.define('popup-notify', PopupNotify);
