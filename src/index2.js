const movies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      score: 9
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      director: 'Christopher Nolan',
      duration: '2h 32min',
      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
      score: 9
    },
    {
      title: '12 Angry Men',
      year: 1957,
      director: 'Sidney Lumet',
      duration: '1h 36min',
      genre: ['Crime', 'Drama'],
      score: 8.9
    },
    {
      title: 'Schindler"s List',
      year: 1993,
      director: 'Steven Spielberg',
      duration: '3h 15min',
      genre: ['Biography', 'Drama', 'History'],
      score: 8.9
    },
    {
      title: 'Pulp Fiction',
      year: 1994,
      director: 'Quentin Tarantino',
      duration: '2h 34min',
      genre: ['Crime', 'Drama'],
      score: 9.9
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
      director: 'Peter Jackson',
      duration: '3h 21min',
      genre: ['Adventure', 'Drama', 'Fantasy'],
      score: 8.9
    },
    {
      title: 'Il buono, il brutto, il cattivo',
      year: 1966,
      director: 'Sergio Leone',
      duration: '3h 2min',
      genre: ['Western'],
      score: 9.9
    }];

function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((item) => {
        return item.genre.includes("Drama");
    });

    const drama = dramaMovies.map((item) => {
        return item.score;
    });

    if (dramaMovies.length === 0)
        return 0;
    else
        console.log(drama);
}

//dramaMoviesScore(movies);
/*
should return an array
should return a new array, not mutate the original one
should return the element in a single element array
should return the new array in ascending order
should order movies with the same year by their title, alphabetically
*/
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) 
{
    const movie = moviesArray.map((item) => {return item});
    const movieordered = movie.sort((x,y) => {
        if (x.year === y.year)  
            return (x.title.localeCompare(y.title));   
        return x.year - y.year;
    });
    console.log(movieordered);

}
//orderByYear(movies);
function orderAlphabetically(moviesArray) {
    const movie = moviesArray.map((item) => {return item});
    
    const movieordered = movie.sort((x,y) => { 
            return (x.title.localeCompare(y.title));   
    });
    if (movieordered.length < 2)
       return movieordered;
    else
    {
       const movie20ordered = movieordered.slice(0,5);  
       return movie20ordered;
    }    
}

console.log(orderAlphabetically(movies));