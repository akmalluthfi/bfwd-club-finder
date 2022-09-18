import moment from 'moment';
// import element
import '../components/SearchBar.js';
import '../components/ClubList.js';
// import styles
import css from '../../css/style.css';

export const main = () => {
  // cari element yang dibutuhkan
  const searchElement = document.querySelector('search-bar');
  const clubListElement = document.querySelector('club-list');

  // beri fungsi untuk event cllick button
  const onButtonSearchClicked = async () => {
    try {
      const response = await fetch(
        'https://sports-api.dicoding.dev/teams/search?t=' + searchElement.value
      );

      const result = await response.json();

      if (result.teams.length <= 0)
        throw new Error(searchElement.value + 'is not found');

      renderResult(result.teams);
    } catch (error) {
      fallbackResult(error.message);
    }
  };

  const renderResult = (results) => {
    clubListElement.clubs = results;
  };

  const fallbackResult = (message) => {
    clubListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;

  // clock
  const displayTime = () => {
    moment.locale('id');
    const time = document.querySelector('.time');
    time.innerHTML = moment().format('LTS');
    const date = document.querySelector('.time');
    date.innerHTML = moment().format('LTS');
  };

  const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000);
  };

  updateTime();
};
