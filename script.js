"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?","");
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?","");
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    let i = 0;
do {
    const lastFilm = prompt("Один из последних просмотренных фильмов",""),
          filmRate = prompt("На сколько оцените его?","");
    if(lastFilm != null && filmRate != null && lastFilm !='' && filmRate != '' && lastFilm.length < 50){
        personalMovieDB.movies[lastFilm] = filmRate;
        console.log('done');
    } else{
        console.log('error');
        i--;
    }
    i++;
}
while(i < 2);
}

rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        alert('Просмотрено мало фильмов!');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert('Вы классический зритель!');
    } else if(personalMovieDB.count >= 30){
        alert('Вы киноман!');
    }  else{
        alert('error!');
    }
}

detectPersonalLevel();

function showMyDb(hidden){
    if(!hidden) {
        console.log(personalMovieDB);
    }

}

showMyDb(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3;i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
        personalMovieDB.genres[i-1] = genre;

    }
}

writeYourGenres();