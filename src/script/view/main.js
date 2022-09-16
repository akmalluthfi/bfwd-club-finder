const main = function () {
  // cari element yang dibutuhkan
  const searchElement = document.querySelector('#searchElement');
  const buttonSearchElement = document.querySelector('#searchButtonElement');
  const clubListElement = document.querySelector('#clubList');

  // beri fungsi untuk event cllick button
  const onButtonSearchClicked = function () {
    // buat object pada data source dan berisi paramater fungsi
    // jika berhasil => 0
    // jika gagal => 1
    const dataSource = new DataSource(renderResult, fallbackResult);
    // jalankan method search club pada class data source
    // parameter berisi value input
    dataSource.searchClub(searchElement.value);
  };

  const renderResult = function (results) {
    clubListElement.innerHTML = '';
    results.forEach(function (club) {
      const name = club.name;
      const fanArt = club.fanArt;
      const description = club.description;

      const clubElement = document.createElement('div');
      clubElement.setAttribute('class', 'club');

      clubElement.innerHTML = `
        <img class="fan-art-club" src="${fanArt}" alt="Fan Art" >
        <div class="club-info">
          <h2>${name}</h2>
          <p>${description}</p>
        </div>
      `;

      clubListElement.appendChild(clubElement);
    });
  };

  const fallbackResult = function (message) {
    clubListElement.innerHTML = '';
    clubListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  };

  buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};
