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
      // Set the class directly on the ul element
      this.shadowRoot.querySelector('ul').setAttribute('class', newValue);
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
              `<li data-index="${index}"><a href="${item.href}" style=" color:white; text-decoration:none; padding: 10px" >${item.name}</a></li>`
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
