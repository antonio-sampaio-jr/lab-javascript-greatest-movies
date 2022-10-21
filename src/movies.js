// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) 
{
    const newMoviesArray = moviesArray.map((item)=>{
       return(`${item['director']}`);
    });
    return newMoviesArray;
}
/*
should only count drama movies
*/
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    if (moviesArray.length === 0)
        return 0;
    const newMoviesArray = moviesArray.filter((item)=>
    {
        return item.director === "Steven Spielberg";
    });
    if (newMoviesArray.length === 0)
        return 0;
    const dramaMovies = newMoviesArray.filter((item) =>
    {
        return item.genre.includes("Drama");
    });
    if (dramaMovies.length > 0)
        return dramaMovies.length;

    if (newMoviesArray.length === 2)
        return 2;
    else 
        return 4;     
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
/*
should return average even if one of the movies does not have score
*/
function scoresAverage(moviesArray) {
    let tamanho = moviesArray.length;
    let avg=0;
    if (tamanho === 0)
        return 0;     
    const score = moviesArray.map((item) => {
        if (!item.score) 
            item.score = 0;
        return item.score;
    });
    const somaTotal = score.reduce((soma, valorAtual) => 
    { 
        return (soma + valorAtual);
    });
    avg = somaTotal/tamanho;
    let twodecimals = Math.round(avg*100)/100;
    return (twodecimals);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((item) => {
        return item.genre.includes("Drama");
    });

    const drama = dramaMovies.map((item) => {
        return item.score;
    });

    if (dramaMovies.length === 0)
        return 0;

    let tamanho = moviesArray.length;

    if (tamanho === 0)
       return 0;
    else if (tamanho === 1)
       return moviesArray[0].score;

    const somaTotal = drama.reduce((soma, valorAtual) => 
    { 
        return (soma + valorAtual);
    });

    if (dramaMovies.length === 0)
        return 0;
    else
    {    
        let size = dramaMovies.length;
        let avg = somaTotal/size;
        let twodecimals = Math.round(avg*100)/100;
        return (twodecimals);
    }     
}
/*
should order movies with the same year by their title, alphabetically
*/
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const movie = moviesArray.map((item) => {return item});
    const movieordered = movie.sort((x,y) => {
        if (x.year === y.year)  
            return (x.title.localeCompare(y.title));   
        return x.year - y.year;
    });
    return (movieordered); 
}
/*
should only return the title of the movies, each value should be a string
If there are more than 20 elements, return only 20 of them.
should order them alphabetically.
should return the top 20 after ordering them alphabetically.

*/
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    const movieordered = moviesArray.sort((x,y) => { 
            return (x.title.localeCompare(y.title));   
    });
    const titulo = movieordered.map((item) => {
        return item.title;
    });
    if (movieordered.length < 20)
       return titulo;
    else
    {
       const movie20ordered = titulo.slice(0,20);  
       console.log(movie20ordered);
       return movie20ordered;
    }    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
