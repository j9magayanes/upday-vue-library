class ListComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['items', 'class'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'items') {
      try {
        const parsedItems = JSON.parse(newValue);
        this.renderList(parsedItems);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    } else if (name === 'class') {
      // Ensure that the provided class value is safe
      const sanitizedClass = sanitizeClassName(newValue);
      // Set the class directly on the ul element
      this.shadowRoot.querySelector('ul').setAttribute('class', sanitizedClass);
    }
  }

  renderList(items) {
    this.shadowRoot.innerHTML = `
      <style>
      </style>
      <ul style="list-style-type: none; display: flex; color:white; margin: 0; padding: 0">
        ${items
          .map(
            (item, index) =>
              `<li data-index="${index}"><a href="${sanitizeURL(item.href)}" style=" color:white; text-decoration:none; padding: 10px" >${sanitizeText(item.name)}</a></li>`
          )
          .join('')}
      </ul>
      <p style=" color:white">Copyright 2023, upday GmbH & Co. KG</p>
    `;

    const listItems = this.shadowRoot.querySelectorAll('li');

    listItems.forEach((item) => {
      item.addEventListener('click', () => {
        const index = item.getAttribute('data-index');
        this.dispatchEvent(
          new CustomEvent('item-clicked', {
            detail: { index, value: items[index] },
          })
        );
      });
    });
  }
}

customElements.define('list-component', ListComponent);

// Sanitize class name to prevent potential security issues
function sanitizeClassName(value) {
  // Implement your sanitization logic here
  // Example: Allow only alphanumeric characters and hyphens
  return value.replace(/[^a-zA-Z0-9-]/g, '');
}

// Sanitize URL to prevent potential security issues
function sanitizeURL(url) {
  // Implement your sanitization logic here
  // Example: Ensure that the URL is valid
  return url.startsWith('http') ? url : '#';
}

// Sanitize text content to prevent potential security issues
function sanitizeText(text) {
  // Implement your sanitization logic here
  // Example: Escape HTML entities
  return text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
