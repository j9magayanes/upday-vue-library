class DiscoverCard extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
                
                <style>
                </style>
                <div>
                <slot>
                </slot>
                </div>
              `;
  
  
    }
  
    static get observedAttributes() {
      return ['class-prop'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
   
    if (name === 'class-prop') {
        this.contentElement.className = newValue;
      }
    }
  }
  
  customElements.define('ad-wrapper', AdWrapper);
  