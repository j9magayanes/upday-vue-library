class ListComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    static get observedAttributes() {
      return ['items'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'items') {
        this.renderList(JSON.parse(newValue));
      }
    }
  
    renderList(items) {
      this.shadowRoot.innerHTML = `
      <style>
      /* Add your CSS styles here */
    </style>
    <ul>
      ${items.map((item, index) => `<li data-index="${index}"><a href=${item.href}>${item.name}</a></li>`).join('')}
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
  