import './ClubItem.js';

class ClubList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  /**
   * @param {array} clubs
   */
  set clubs(clubs) {
    this._clubs = clubs;
    this.render();
  }

  render() {
    // bersihkan child
    this.shadowDOM.innerHTML = '';

    this._clubs.forEach((club) => {
      const clubItem = document.createElement('club-item');
      clubItem.club = club;

      // tambah child baru
      this.shadowDOM.appendChild(clubItem);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>  
      <h2 class="placeholder">${message}</h2>
    `;
  }
}

customElements.define('club-list', ClubList);
