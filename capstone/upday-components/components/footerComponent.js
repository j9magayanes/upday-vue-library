class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['items'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'items') {
      try {
        const parsedItems = JSON.parse(newValue);
        this.renderList(parsedItems);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }
  }

  renderList(items) {
    this.shadowRoot.innerHTML = `
      <style>
        /* Add your CSS styles here */
      </style>
      <ul>
        ${items.map((item, index) => `<li data-index="${index}"><a onClick=${item.href} href="${item.href}">${item.name}</a></li>`).join('')}
      </ul>
      <p>Copyright 2023, upday GmbH & Co. KG</p>
    `;

    const listItems = this.shadowRoot.querySelectorAll('li');
    listItems.forEach((item) => {
      item.addEventListener('click', () => {
        const index = item.getAttribute('data-index');
        this.dispatchEvent(new CustomEvent('item-clicked', { detail: { index, value: items[index] } }));
      });
    });
  }
}

customElements.define('footer-component', FooterComponent);
