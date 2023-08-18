
    // Define the CounterComponent class
class CounterComponent extends HTMLElement {
        constructor() {
          super();
  
          // Create a shadow DOM for the component
          this.attachShadow({ mode: 'open' });
  
          // Initial counter value
          this.counterValue = 0;
  
          // Create the component's HTML and styles
          this.shadowRoot.innerHTML = `
            <style>
              .counter-container {
                display: flex;
                align-items: center;
              }
              .counter-btn {
                margin: 0 5px;
                padding: 5px 10px;
                font-size: 16px;
                cursor: pointer;
              }
            </style>
            <div class="counter-container">
              <button class="counter-btn" id="decrement">-</button>
              <span>${this.counterValue}</span>
              <button class="counter-btn" id="increment">+</button>
            </div>
          `;
  
          // Attach event listeners to the buttons
          this.shadowRoot.getElementById('decrement').addEventListener('click', () => this.decrement());
          this.shadowRoot.getElementById('increment').addEventListener('click', () => this.increment());
        }
  
        // Increment the counter value
        increment() {
          this.counterValue++;
          this.updateCounter();
        }
  
        // Decrement the counter value
        decrement() {
          this.counterValue--;
          this.updateCounter();
        }
  
        // Update the counter display
        updateCounter() {
          this.shadowRoot.querySelector('span').textContent = this.counterValue;
        }
      }
  
      // Define the custom element "counter-component"
      customElements.define('counter-component', CounterComponent);  


 class AdWrapper extends HTMLElement {
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
          return ['src', 'title', 'label', 'size'];
        }
      
        attributeChangedCallback(name, oldValue, newValue) {
       
        if (name === 'class-prop') {
            this.contentElement.className = newValue;
          }
        }
      }
      
      customElements.define('ad-wrapper', AdWrapper);

     