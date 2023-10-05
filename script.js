const numberOffilms =prompt('How many movies do you wathc?','');
const personalMovieDB ={
    count:numberOffilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};
const a = prompt ('One of your favorite movies?',''),
      b = prompt ('did you love it',''),
      c = prompt('one of the last movies', ''),
      d = prompt('did you love it','');

personalMovieDB.movies [a]=b;
personalMovieDB.movies [c]=d;

console.log(personalMovieDB);