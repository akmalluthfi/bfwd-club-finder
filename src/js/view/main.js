import { DataSource } from '../data/data-source.js';
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
    // dalam class DataSource terdapat static method yang mengembalikan promise
    try {
      const result = await DataSource.searchClub(searchElement.value);
      renderResult(result);
    } catch (error) {
      fallbackResult(error);
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
