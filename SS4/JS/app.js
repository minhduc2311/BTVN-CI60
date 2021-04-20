import FilmContainer from './filmContainer.js';
import FilmList from './filmList.js';
import data from './data.js';
// console.log(data);

// let json = JSON.stringify(data);
// console.log(json);

let $comicList = document.getElementById('my-list');
$comicList.setAttribute('films', JSON.stringify(data));


