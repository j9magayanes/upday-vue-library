class FooterComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    // Define getters and setters for the props
    get list() {
      return JSON.parse(this.getAttribute('list'));
    }
  
    set list(value) {
      this.setAttribute('list', JSON.stringify(value));
      this.render();
    }
  
    get name() {
      return this.getAttribute('name');
    }
  
    set name(value) {
      this.setAttribute('name', value);
      this.render();
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <div>
          <h2>${this.name}</h2>
          <ul>
            ${this.list.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      `;
    }
  }
  
  customElements.define('footer-component', FooterComponent);
  