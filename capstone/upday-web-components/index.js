
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



      
   

      class ArticleDetail extends HTMLElement {
        constructor() {
          super();
      
          this.attachShadow({ mode: 'open' });
      
          this.shadowRoot.innerHTML = `
                    
                    <style>
                   
                    </style>
                    <p> <slot></slot></p>
                  `;
      
    
    
        this.contentElement = this.shadowRoot.querySelector('p');
    }
      
        static get observedAttributes() {
          return ['class-prop', 'title', 'id'];
        }
      
    
    
    
        attributeChangedCallback(name, oldValue, newValue) {
       
        if (name === 'class-prop') {
            this.contentElement.className = newValue;
          } else if (name === 'title') {
            this.contentElement.setAttribute('title', newValue);
          } else if (name === 'id') {
            this.contentElement.id = newValue;
          } 
        }
      }
      
      customElements.define('article-detail', ArticleDetail);

 class ImageComponent extends HTMLElement {
        constructor() {
          super();
      
          this.attachShadow({ mode: 'open' });
      
          this.shadowRoot.innerHTML = `
                    
                    <style>
                    .mobile {
                      background-position: 50% 50%;
                      background-size: cover;
                      height: 204px;
                      position: relative;
                      width: 360px;
                    }
                    </style>
                    <img class="mobile"/>
                  `;
      
          this.imgElement = this.shadowRoot.querySelector('img');
        }
      
        static get observedAttributes() {
          return ['src', 'title', 'label', 'size', 'class-prop'];
        }
      
        attributeChangedCallback(name, oldValue, newValue) {
          if (name === 'src') {
            this.imgElement.setAttribute('src', newValue);
          } else if (name === 'title') {
            this.imgElement.setAttribute('title', newValue);
          }  else if (name === 'label') {
            this.imgElement.setAttribute('label', newValue);
          }   else if (name === 'size') {
            this.imgElement.setAttribute('size', newValue);
          }else if (name === 'class-prop') {
            this.contentElement.className = newValue;
          }
        }
      }
      
      customElements.define('image-component', ImageComponent);

      class AdWrapper extends HTMLElement {
        constructor() {
          super();
      
          this.attachShadow({ mode: 'open' });
      
          this.shadowRoot.innerHTML = `
                    
                    <style>
                    .ad-block {
                      background-color: #f2f2f2;
                      align-self: center;
                      padding: 30px;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      transition: flex-grow ease-in-out 1s;
                      margin: 16px 0;
                      position: relative;
                    }
                    
                    .grow {
                      flex-grow: 1;
                    }
                    </style>
                    <div class="ad-block grow">
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

 class AdText extends HTMLElement {
        constructor() {
          super();
      
          this.attachShadow({ mode: 'open' });
      
          this.shadowRoot.innerHTML = `
                      
                      <style>
                      .label {
                        height: 14px;
                        width: 223px;
                        }
                        .label .story-continues {
                        color: #9c9c9c;
                        font-family: "Inter-Bold", Helvetica;
                        font-size: 10px;
                        font-weight: 700;
                        left: 0;
                        letter-spacing: 0;
                        line-height: 14px;
                        position: fixed;
                        text-align: center;
                        top: 0;
                        white-space: nowrap;
                        }
                      
                      </style>
                      <div className="label">
                      <div  className="story-continues"><p><slot></slot></p></div>
                      </div>
                    `;
      
                    this.contentElement = this.shadowRoot.querySelector('p');
        }
      
        static get observedAttributes() {
          return [ 'text','class-prop'];
        }
      
        attributeChangedCallback(name, oldValue, newValue) {
          if (name === 'class-prop') {
              this.contentElement.clas = newValue;
          } else if (name === 'text') {
            this.contentElement.setAttribute('text', newValue);
          }
        }
      }
      
      customElements.define('ad-text', AdText);
       
  class CategoryDetail extends HTMLElement {
        constructor() {
          super();
      
          this.attachShadow({ mode: 'open' });
      
          this.shadowRoot.innerHTML = `
                      
                      <style>
                          .category {
                          align-items: flex-start;
                          display: flex;
                          gap: 4px;
                          height: 15px;
                          padding: 0px 24px;
                          position: relative;
                          width: 360px;
                          }
                          
                      .category .TAG {
          align-items: center;
          display: inline-flex;
          flex: 0 0 auto;
          gap: 30px;
          justify-content: center;
          position: relative;
          }
          .category .text-wrapper {
          color: #7f7f7f !important;
          font-family: "Inter-Bold", Helvetica;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0;
          line-height: 14.4px;
          margin-top: -1px;
          position: relative;
          text-align: center;
          white-space: nowrap;
          width: fit-content;
          }
                      </style>
                      <div className="category">
                          <div className="TAG">
                              <div className="text-wrapper"><slot></slot></div>
                          </div>
                      </div>
                    `;
      
          this.contentElement = this.shadowRoot.querySelector('.text-wrapper');
        }
      
        static get observedAttributes() {
          return [ 'text','class-prop'];
        }
      
        attributeChangedCallback(name, oldValue, newValue) {
          if (name === 'class-prop') {
              this.contentElement.class = newValue;
          } else if (name === 'text') {
            this.contentElement.setAttribute('text', newValue);
          }
        }
      }
      
      customElements.define('category-detail', CategoryDetail);
      
      class articleTitle extends HTMLElement {
        constructor() {
          super();
      
          const shadowRoot = this.attachShadow({ mode: 'open' });
      
          const container = document.createElement('div');
          container.classList.add('label'); // Add a class
          shadowRoot.appendChild(container);
      
          const textNode = document.createTextNode('Title');
          textNode.classList.add('title-text');
          container.appendChild(textNode);
      
          // Apply font color using CSS
          const style = document.createElement('style');
          style.textContent = `
          .label {
            height: 144px;
            width: 312px;
            }
            .label .title-text {
            color: #121212;
            font-family: "Inter-Bold", Helvetica;
            font-size: 28px;
            font-weight: 700;
            height: 144px;
            left: 0;
            letter-spacing: 0;
            line-height: 36.4px;
            position: fixed;
            top: 0;
            width: 312px;
            }
          `;
          shadowRoot.appendChild(style);
        }
      
        // Other methods and properties here
      }
      
      customElements.define('article-title', ArticleTitle);
    
      
      
      
   

      class sourceComponent extends HTMLElement {
        constructor() {
          super();
      
          this.attachShadow({ mode: 'open' });
      
          this.shadowRoot.innerHTML = `
                    
                    <style>
                    .source {
                        height: 17px;
                        width: 312px;
                        background-color: #f2f2f2;
                    }
                    
                    .source .source-name {
                      background-color: #f2f2f2;
                        color: #7f7f7f;
                        font-family: "Inter-Bold", Helvetica;
                        font-size: 12px;
                        font-weight: 700;
                        height: 17px;
                        left: 0;
                        letter-spacing: 0;
                        line-height: 16.8px;
                        position: fixed;
                        top: 0;
                        width: 312px;
                    }
                    
                  
                    </style>
                    <div class="source">
                    <div class="source-name"><slot></slot></div>
                    </div>
                  `;
                  this.textContent = this.shadowRoot.querySelector('.source-name');
      
    
        }
    
        static get observedAttributes() {
          return ['class-prop', 'text'];
        }
      
        attributeChangedCallback(name, oldValue, newValue) {
       
        if (name === 'class-prop') {
            this.contentElement.className = newValue;
          }  else if (name === 'text') {
            this.textContent.setAttribute('text', newValue);
          }
        }
      }
      
      customElements.define('ad-wrapper', AdWrapper);
    