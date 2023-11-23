class TabComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['name', 'selected'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'name') {
      this.name = newValue || '';
    } else if (name === 'selected') {
      // Use hasAttribute to check if the 'selected' attribute is present
      if (newValue === 'true') {
        this.setAttribute('selected', '');
      } else {
        this.removeAttribute('selected');
      }
    }

    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        ${styles} <!-- Insert the scoped styles here -->
      </style>
      <li :class="{ active: this.hasAttribute('selected') }">
        <a
          class="element-with-ripple"
          ref="elementWithRipple"
          @pointerdown="createRippleAnimationFn($event, 'elementWithRipple')"
          :href="${this.href}"
          :aria-selected="this.hasAttribute('selected')"
          :aria-label="this.t('Categories.' + this.name)"
          role="tab"
        >
          <slot></slot>
        </a>
      </li>
    `;
  }

  createRippleAnimationFn(e, refKey) {
    const element = this.shadowRoot.querySelector('.element-with-ripple');
    // Implement createRippleAnimation function or import it from the appropriate source
  }

  get name() {
    return this.getAttribute('name') || '';
  }

  set name(value) {
    this.setAttribute('name', value);
  }

  get href() {
    return `#${this.name}`;
  }
}

customElements.define('tab-item-component', TabComponent);

const styles = `
  /* Your scoped styles here */
  li {
    display: flex;
    align-items: center;
    height: 5.1em;
    flex-shrink: 0;
    flex-grow: 0;
    padding-right: 0.1em;
  }

  li a {
    border-radius: 38px;
    cursor: pointer;
    text-decoration: none;
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

  li.active a {
    font-weight: 700;
    background-color: rgba(0, 0, 0, 0.05);
    color: var(--font);
    letter-spacing: -0.5px;
  }

  @media (prefers-color-scheme: dark) {
    li a {
      color: white;
    }
    li.active a {
      background-color: rgba(256, 256, 256, 0.2);
    }
  }
`;
