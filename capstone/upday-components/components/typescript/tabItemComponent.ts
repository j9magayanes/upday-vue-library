class TabItemComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    static get observedAttributes(): string[] {
      return ['name', 'selected'];
    }
  
    attributeChangedCallback(name: string, _oldValue: string, newValue: string | null) {
      if (name === 'name') {
        this.name = newValue || '';
      } else if (name === 'selected') {
        this.selected = newValue === 'true';
      }
  
      this.render();
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <li :class="{ active: selected }">
          <a
            class="element-with-ripple"
            ref="elementWithRipple"
            @pointerdown="createRippleAnimationFn($event, 'elementWithRipple')"
            :href="href"
            :aria-selected="selected"
            :aria-label="name"
            role="tab"
          >
            {{ name }}
          </a>
        </li>
      `;
    }
  
    createRippleAnimationFn(e: any, refKey: string) {
      const element: any = this.shadowRoot.querySelector('.element-with-ripple');
      // Implement createRippleAnimation function or import it from the appropriate source
    }
  
    get name(): string {
      return this.getAttribute('name') || '';
    }
  
    set name(value: string) {
      this.setAttribute('name', value);
    }
  
    get selected(): boolean {
      return this.hasAttribute('selected');
    }
  
    set selected(value: boolean) {
      if (value) {
        this.setAttribute('selected', '');
      } else {
        this.removeAttribute('selected');
      }
    }
  
    get href(): string {
      return `#${this.name}`;
    }
  }
  
  customElements.define('tab-item-component', TabItemComponent);
  