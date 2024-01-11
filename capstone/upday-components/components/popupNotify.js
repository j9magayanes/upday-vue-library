class PopupNotify extends HTMLElement {
  constructor() {
    super();
<<<<<<< Updated upstream
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
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
        <h1>${sanitizeHTMLContent('Test')}</h1>
      </div>
    `;
=======
    this.attachShadow({mode: 'open'});
    this.render();
  }

  static get observedAttributes() {
    return ['title'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'title') {
      this.render(newValue);
    }
  }

  render(title = 'Default Title') {
    this.shadowRoot.innerHTML = `
      <style>
        .popup-container {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #ffffff;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
          font-family: Arial, sans-serif;
        }
        .popup-title {
          font-size: 24px;
          margin-bottom: 20px;
        }
        .close-btn {
          cursor: pointer;
          background-color: #007bff;
          color: #ffffff;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 5px;
        }
      </style>
      <div class="popup-container">
        <div class="popup-title">${title}</div>
        <button class="close-btn">Close</button>
      </div>
    `;

    this.shadowRoot.querySelector('.close-btn').addEventListener('click', () => {
      this.closePopup();
    });
  }

  closePopup() {
    this.parentElement.removeChild(this);
>>>>>>> Stashed changes
  }
}

customElements.define('popup-notify', PopupNotify);
<<<<<<< Updated upstream

// Sanitize HTML content to prevent potential security issues
function sanitizeHTMLContent(content) {
  const div = document.createElement('div');
  div.textContent = content;
  return div.innerHTML;
}
=======
>>>>>>> Stashed changes
