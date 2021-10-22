"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?","");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const lastFilm = prompt("Один из последних просмотренных фильмов",""),
      filmRate = prompt("На сколько оцените его?",""),
      lastFilm1 = prompt("Один из последних просмотренных фильмов",""),
      filmRate2 = prompt("На сколько оцените его?","");
personalMovieDB.movies[lastFilm] = filmRate;
personalMovieDB.movies[lastFilm1] = filmRate2;
console.log(personalMovieDB);