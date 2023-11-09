class ListComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
  
  
 // Default items array
 this.defaultItems = [
  { name: 'Default Item 1', href: 'https://www.google.com/' },
  { name: 'Default Item 2', href: 'https://www.google.com/' },
  // Add more default items as needed
];

// Set default items if 'items' attribute is not provided
if (!this.hasAttribute('items')) {
  this.setAttribute('items', JSON.stringify(this.defaultItems));
}
}
    attributeChangedCallback(name, oldValue, newValue) {
      console.log(`Attribute "${name}" changed. New value:`, newValue);
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
      ${items.map((item, index) => `<li data-index="${index}"><a href="${item.href}">${item.name}</a></li>`).join('')}
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
  
  customElements.define('list-component', ListComponent);
  