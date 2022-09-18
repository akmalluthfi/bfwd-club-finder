class AppBar extends HTMLElement {
  constructor() {
    super();
    /**
     * attachShadow shadow mengembalikan shadowRoot
     * simpan kembalian attachShadow kedalam properti
     * supaya dapat digunakan dimanapun (didalam kelas)
     */
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        :host {
          width: 100%;
          background-color: cornflowerblue;
          color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          display: block;
        }

        h2 {
          padding: 16px;
        }
      </style>
      
      <h2>Club Finder</h2>
    `;
  }
}

customElements.define('app-bar', AppBar);
