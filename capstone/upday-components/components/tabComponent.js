
class TabComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        li {
          display: inline-block;
          align-items: center;
          flex-shrink: 0;
          flex-grow: 0;
          text-decoration: none;
          padding-right: 0.1em;
        }
        a {
          border-radius: 38px;
          text-decoration: none;
          cursor: pointer;
          text-align: center;
          color: #555;
          font-size: 2em;
          text-transform: uppercase;
          min-height: 2.2em;
          padding: 0.1em 0.5em;
          border: 1px solid transparent;
          display: flex;
          align-items: center;
        }
        li .active a {
          font-weight: 700;
          background-color: rgba(0, 0, 0, 0.05);
          text-decoration: none;
          color: var(--font);
          letter-spacing: -0.5px;
        }
        .active {
          font-weight: 700;
          background-color: rgba(0, 0, 0, 0.05);
          border-radius: 38px;
          text-decoration: none;
          color: var(--font);
          letter-spacing: -0.5px;
        }
        @media (prefers-color-scheme: dark) {
          a {
            color: white;
            text-decoration: none;
          }
          li .active a {
            border-radius: 38px;
            background-color: rgba(256, 256, 256, 0.2);
            text-decoration: none;
          }
          .active a {
            border-radius: 38px;
            background-color: rgba(256, 256, 256, 0.2);
            text-decoration: none;
          }
          .element-with-ripple {
            position: relative;
            overflow: hidden;
          }
          
        .ripple {
            position: absolute;
            border-radius: 50%;
            transform: scale(0.66);
            animation: ripple 350ms ease forwards; /* here we used forwards because we want our ripples to remain on the selected element when user is still pressing the element. */
            background-color: rgba(255, 9, 9, 0.967);
            pointer-events: none;
          }
          
          .ripple-left {
            content: '';
            border-radius: 100%;
            animation: ripple-left 125ms forwards;
          }
          
          .ripple-right {
            content: '';
            border-radius: 100%;
            animation: ripple-right 125ms forwards;
          }
          
          .toggle-circle {
            display: none;
          }
          
          .toggle-right {
            content: '';
            border-radius: 100%;
            animation: toggle-right 300ms forwards;
          }
          
          .toggle-left {
            content: '';
            border-radius: 100%;
            animation: toggle-left 300ms forwards;
          }
          
          /* In case of nightmode, we simply added a nightmode class to the selected element and inverted color of a ripple. */
          .nightmode span.ripple {
            filter: invert(1);
          }
          
          /* when prefers-color-scheme is set to dark */
          @media (prefers-color-scheme: dark) {
            span.ripple {
              background-color: rgba(255 255 255 / 20%);
            }
          }
          
          @keyframes ripple {
            100% {
              transform: scale(2);
              opacity: 100%;
            }
          }
          
          @keyframes ripple-left {
            0% {
              transform: translateX(1px);
              opacity: 0.2;
              transform-origin: 0 0;
            }
            50% {
              transform: translateX(1px);
              opacity: 0.2;
            }
            100% {
              transform: translateX(1px);
              opacity: 0;
              transform-origin: 0 0;
            }
          }
          
          @keyframes ripple-right {
            0% {
              transform: translateX(1px) scale(0);
              transform-origin: 18px 2px;
            }
            50% {
              transform: translateX(1px) scale(1);
          
              transform-origin: 18px 2px;
            }
            100% {
              transform: translateX(1px) scale(1.3);
          
              transform-origin: 18px 2px;
            }
          }
          
          @keyframes toggle-right {
            0% {
              transform: translateX(-14px) translateY(0px) scale(1);
              transform-origin: 50% 50%;
            }
            10% {
              transform: translateX(-14px) translateY(-2px) scale(0.9);
              transform-origin: 50% 50%;
            }
          
            20% {
              transform: translateX(-10px) scale(1);
              transform-origin: 50% 50%;
            }
          
            100% {
              transform: translateX(-0px) scale(1);
            }
          }
          
          @keyframes toggle-left {
            0% {
              transform: translateX(14px) translateY(0px) scale(1);
              transform-origin: 50% 50%;
            }
            10% {
              transform: translateX(14px) translateY(-2px) scale(0.9);
              transform-origin: 50% 50%;
            }
            20% {
              transform: translateX(10px) scale(1);
              transform-origin: 50% 50%;
            }
          
            100% {
              transform: translateX(0px) scale(1);
            }
          }
          
        }
      </style>
      <li>
        <a>
          <slot></slot>
        </a>
      </li>
    `;

    this.linkComponent = this.shadowRoot.querySelector('a');
    this.listComponent = this.shadowRoot.querySelector('li');
  }

  static get observedAttributes() {
    return [
      'class-list',
      'class-link',
      'ref-link',
      'aria-label',
      'href',
      'pointerdown',
      'role',
      'text',
      'active',
    ];
  }

  createRippleAnimation(e, element, animate) {
    const rect = element.getBoundingClientRect();
    /* x position within the element. */
    const x = e.clientX - rect.left;
    /* y position within the element. */
    const y = e.clientY - rect.top;
    const ripple = document.createElement('span');
    const diameter = Math.max(
      getHypotenuse(x, y),
      getHypotenuse(y, element.clientWidth - x),
      getHypotenuse(element.clientWidth - x, element.clientHeight - y),
      getHypotenuse(x, element.clientHeight - y)
    );
    const radius = diameter / 2;
    ripple.style.width = `${diameter}px`;
    ripple.style.height = `${diameter}px`;
    ripple.style.left = `${x - radius}px`;
    ripple.style.top = `${y - radius}px`;
    ripple.classList.add('ripple');
    ripple.animationStartTime = new Date().getTime();
  
    if (!animate) {
      ripple.style.transform = 'scale(2.1)';
    }
  
    element.addEventListener('pointercancel', (event) => {
      removeRippleAnimation(event, element);
    });
    element.addEventListener('pointerup', (event) => {
      removeRippleAnimation(event, element);
    });
    element.addEventListener('pointerleave', (event) => {
      removeRippleAnimation(event, element);
    });
    element.appendChild(ripple);
  }
  
   removeRippleAnimation(e, element) {
    const ripples = e.currentTarget.getElementsByClassName('ripple');
    for (let i = 0; i < ripples.length; i++) {
      const ripple = ripples[i];
      if (ripple) {
        setTimeout(() => {
          ripple.style.backgroundColor = 'transparent';
          ripple.style.transition = 'background-color 150ms linear';
          setTimeout(() => {
            ripple.remove();
          }, 10);
        }, 350 - (new Date().getTime() - ripple.animationStartTime));
      }
    }
  }
  
  getHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
  }
  

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Attribute changed:', name, 'Old value:', oldValue, 'New value:', newValue);
    if (name === 'class-list') {
      this.listComponent.setAttribute('class', newValue);
    } else if (name === 'class-link') {
      this.linkComponent.setAttribute('class', newValue);
    } else if (name === 'ref-link') {
      this.linkComponent.setAttribute('ref', newValue);
    } else if (name === 'aria-label') {
      this.linkComponent.setAttribute('aria-label', newValue);
    } else if (name === 'href') {
      this.linkComponent.href = newValue;
    } else if (name === 'role') {
      this.linkComponent.setAttribute('role', newValue);
    } else if (name === 'pointerdown') {
      this.linkComponent.addEventListener('pointerdown', () => {
        console.log('test');
      });
      
    }else if (name === 'text') {
        this.linkComponent.textContent = newValue;
      
    } else if (name === 'active') {
      if (newValue === 'true' || newValue === '') {
        this.setAttribute('active', '');
      } else {
        this.removeAttribute('active');
      }
    }
  }
}

customElements.define('tab-component', TabComponent);
