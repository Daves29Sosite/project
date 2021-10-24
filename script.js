"use strict";




const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?","");
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?","");
        }
    },
    rememberMyFilms: function(){
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
    },
    detectPersonalLevel: function (){
        if(personalMovieDB.count < 10){
            alert('Просмотрено мало фильмов!');
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            alert('Вы классический зритель!');
        } else if(personalMovieDB.count >= 30){
            alert('Вы киноман!');
        }  else{
            alert('error!');
        }
    },
    showMyDB: function (hidden){
        if(!hidden) {
            console.log(personalMovieDB);
        }
    
    },
    writeYourGenres: function () {
        /* for(let i = 1; i <= 3;i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
            if(genre === '' || genre == null){
                console.log('Вы ввели неккоректные данные либо не ввели их вообще!');
                i--;
            }
            else{
                personalMovieDB.genres[i-1] = genre;
            } 
            let genre = prompt(`Введите ваши любимые жанры через запятую`);
        }
        personalMovieDB.genres.forEach((item, i)=>{
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        }); */
        for(let i=1;i < 2;i++){
            let genres = prompt(`Введите ваши любимые жанры через запятую!`).toLowerCase();
            if(genres === '' || genres == null){
                console.log('Вы ввели неккоректные данные либо не ввели их вообще!');
                i--;
            }
            else{
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            } 
        }
        personalMovieDB.genres.forEach((item, i)=>{
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
        
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat == true){
            personalMovieDB.privat = false;
        }
        else{
            personalMovieDB.privat = true;
        }

    }
};











