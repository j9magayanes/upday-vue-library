class ListComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    static get observedAttributes(): string[] {
      return ['items', 'class'];
    }
  
    attributeChangedCallback(name: string, _oldValue: string, newValue: string | null) {
      if (name === 'items') {
        try {
          const parsedItems = JSON.parse(newValue || '');
          this.renderList(parsedItems);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      } else if (name === 'class') {
        // Set the class directly on the ul element
        const ulElement = this.shadowRoot.querySelector('ul');
        if (ulElement) {
          ulElement.setAttribute('class', newValue || '');
        }
      }
    }
  
    renderList(items: { href: string; name: string }[]) {
      this.shadowRoot.innerHTML = `
        <style>
          /* Add your CSS styles here */
        </style>
        <ul style="list-style-type: none; display: flex; color: white; margin: 0; padding: 0">
          ${items
            .map(
              (item, index) =>
                `<li data-index="${index}"><a href="${item.href}" style=" color: white; text-decoration:none; padding: 10px" >${item.name}</a></li>`
            )
            .join('')}
        </ul>
        <p style=" color: white">Copyright 2023, upday GmbH & Co. KG</p>
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
  