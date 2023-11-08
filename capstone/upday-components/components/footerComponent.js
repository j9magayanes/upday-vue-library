class FooterComponent extends HTMLElement {
    constructor() {
        super();
    
        this.attachShadow({ mode: 'open' });
    
        this.shadowRoot.innerHTML = `
        <footer className='padded-lr'>
        <ul>
        <>
            <li>
             <a>
                <slot></slot>
              </a>
            </li>
            </>
        </ul>
        <p>Copyright 2023, upday GmbH & Co. KG</p>
      </footer>
                  `;
        this.textContent = this.shadowRoot.querySelector('slot');
        this.link = this.shadowRoot.querySelector('a');
      }
        
    
      static get observedAttributes() {
        return [ 'text','class-prop', 'callback', 'href'];
      }
    
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'class-prop') {
            this.contentElement.class = newValue;
        } else if (name === 'text') {
          this.textContent.setAttribute('text', newValue);
        } else if (name === 'callback') {
            this.link.setAttribute('callback', newValue);
          } else if (name === 'href'){
            this.link.setAttribute('href', newValue);
          }
      }
    }
  
  customElements.define('footer-component', FooterComponent);
  