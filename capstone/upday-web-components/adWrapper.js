export class AdWrapper extends HTMLElement {
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
  
      this.imgElement = this.shadowRoot.querySelector('img');
    }
  
    static get observedAttributes() {
      return ['src', 'title', 'label', 'size'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
   
    if (name === 'class-prop') {
        this.contentElement.className = newValue;
      }
    }
  }
  
  customElements.define('ad-wrapper', AdWrapper);