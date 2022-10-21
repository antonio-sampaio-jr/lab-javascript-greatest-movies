/*
funcao(params)

function funcao(params)
{

}
// expressão de função -> chamar após criar a minha função
const funcao = funcao(params){

}
// arrow function
const funcaoArrow = (params) => {

}
*/
// callback  -> chamar uma função em função dentro de outra função
function ePar(numero,mensagem)
{
    if(numero % 2 === 0)
       mensagem();
    else
       console.log("É ímpar");    
}
const mensagemEPar = () => {
    console.log("Este número É par");
}   
// == (conteúdo igual) === (tipo e conteúdo iguais)
//ePar(3,mensagemEPar);

//ePar(4,()=>{console.log("Par")})

const numeros=[32,45,100];
const dobro_numeros = numeros.map((item)=>{
    return (2*item);
});

const pares = numeros.filter((item)=>{
    return (item%2 === 0);
});
//console.log(pares);
const movies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    }];
    function howManyMovies(moviesArray) {
        let i;
        const newMoviesArray = moviesArray.filter((item)=>
        {
            if (item.director === "Frank Darabont") 
            {
                for (let genero of item.genre) {
                    if (genero === "Drama")
                          console.log("==>"+item);
                }    
            }
        });
        return newMoviesArray;
    }
    //howManyMovies(movies); 

    const listaDeCompras = [
        { nome: "Alface", categoria: "Verduras", preco: 5.70 },
        { nome: "Maçã", categoria: "Frutas", preco: 7 },
        { nome: "Banana", categoria: "Frutas", preco: 10 },
        { nome: "Cebolinha", categoria: "Verduras", preco: 2.99 },
        { nome: "Abacate", categoria: "Frutas", preco: 4.40 },
        { nome: "Berinjela", categoria: "Legumes", preco: 8.55 }
    ];
    function teste(listaDeCompras)
    {
        console.log(listaDeCompras.length);
    }
    teste(listaDeCompras);

    const somenteFrutas = frutas.map((item) => {
        return item.categoria === "Frutas";
    });
    
    const precoDeFrutas = frutas.map((item) => {
        return item.preco;
    });

    const totalPrecoFrutas = precoDeFrutas.reduce((soma, valorAtual) => { 
        return soma + valorAtual;
    });
    /*
should return a number
should return the average score of 2 movies with score 8 each
should be rounded to 2 decimals places
should return 0 if an empty array is passed
should return average even if one of the movies does not have score
*/
function scoresAverage(moviesArray) {
    let tamanho = moviesArray.length;
    let avg = 0;
    
    const somaTotal = moviesArray.reduce((soma, valorAtual) => 
    { 
        soma+= valorAtual;
    });
    avg = soma/tamanho;
    return (avg);

}
