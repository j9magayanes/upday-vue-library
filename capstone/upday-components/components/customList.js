class CustomList extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: 'open' });
    this._checked = false;
    this._text = '';
  }

  connectedCallback() {
    this._root.innerHTML = `
      <style>
        /* Add your styles here */
      </style>
      <li class="item">
        <input type="checkbox">
        <label></label>
        <button class="destroy"></button>
      </li>
    `;

    this.$item = this._root.querySelector('.item');
    this.$removeButton = this._root.querySelector('.destroy');
    this.$text = this._root.querySelector('label');
    this.$checkbox = this._root.querySelector('input');

    this.$removeButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.dispatchEvent(new CustomEvent('onRemove', { detail: this.index }));
    });

    this.$checkbox.addEventListener('click', (e) => {
      e.preventDefault();
      this.dispatchEvent(new CustomEvent('onToggle', { detail: this.index }));
    });

    this.render();
  }

  disconnectedCallback() {}

  static get observedAttributes() {
    return ['text'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Sanitize and validate attribute if necessary
    this._text = newValue;
    this._render();
  }

  set index(value) {
    this._index = value;
  }

  get index() {
    return this._index;
  }

  set checked(value) {
    this._checked = Boolean(value);
    this._render();
  }

  get checked() {
    return this._checked;
  }

  _render() {
    if (!this.$item) return;

    this.$text.textContent = this._text;

    if (this._checked) {
      this.$item.classList.add('completed');
      this.$checkbox.setAttribute('checked', '');
    } else {
      this.$item.classList.remove('completed');
      this.$checkbox.removeAttribute('checked');
    }
  }
}

customElements.define('custom-list', CustomList);
