//navegacion entre secciones/botones

document.getElementById("imagen-logo").addEventListener("click", () => {
    document.getElementById("home-container").style.display = "block";
    document.getElementById("reviews-container").style.display = "none";
    document.getElementById("rooms-container").style.display = "none";
    document.getElementById("results-container").style.display = "none";
    document.getElementById("root").innerHTML = "";
});
document.getElementById("buttonReviews").addEventListener("click", () => {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("reviews-container").style.display = "block";
    document.getElementById("rooms-container").style.display = "none";
    document.getElementById("results-container").style.display = "none";
    document.getElementById("root").innerHTML = "";
});
document.getElementById("buttonPlay").addEventListener("click", () => {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("reviews-container").style.display = "none";
    document.getElementById("rooms-container").style.display = "block";
    document.getElementById("results-container").style.display = "none";
    document.getElementById("root").innerHTML = "";
});
document.getElementById("buttonRoom1").addEventListener("click", () => {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("reviews-container").style.display = "none";
    document.getElementById("rooms-container").style.display = "none";
    document.getElementById("results-container").style.display = "block";
    document.getElementById("root").innerHTML = "";
});
document.getElementById("buttonRoom2").addEventListener("click", () => {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("reviews-container").style.display = "none";
    document.getElementById("rooms-container").style.display = "none";
    document.getElementById("results-container").style.display = "block";
    document.getElementById("root").innerHTML = "";
});
document.getElementById("buttonRoom3").addEventListener("click", () => {
    document.getElementById("home-container").style.display = "none";
    document.getElementById("reviews-container").style.display = "none";
    document.getElementById("rooms-container").style.display = "none";
    document.getElementById("results-container").style.display = "block";
    document.getElementById("root").innerHTML = "";
});
let searchEl = document.getElementById('searchResult');
let tqllr = document.getElementById('movie-container');
let sala1 = document.getElementById('root');

document.getElementById('searchData').addEventListener('click', function() {
    tqllr.innerHTML = " ";
    const titleSearch = document.getElementById('searchBar').value;
    const request = new Request('http://www.omdbapi.com/?i=tt3896198&apikey=f37c3cde&s=' + titleSearch);

    fetch(request).then(function(result) {
        return result.json();
    }).then(function(data) {
        console.log(data);
        var len = data.Search.length;
        for (var i = 0; i < len; i++) {
            var movieContainer = document.createElement('div');
            movieContainer.className = 'search-result--item';
            var titleEl = document.createElement('div');
            titleEl.innerText = data.Search[i].Title;
            var yearEl = document.createElement('div');
            yearEl.innerText = data.Search[i].Year;
            var typeEl = document.createElement('div');
            typeEl.innerText = data.Search[i].Type;
            var posterEl = document.createElement('img');
            posterEl.src = data.Search[i].Poster;
            movieContainer.appendChild(posterEl);
            movieContainer.appendChild(titleEl);
            movieContainer.appendChild(yearEl);
            movieContainer.appendChild(typeEl);
            searchEl.appendChild(movieContainer);
        }
    });
});
//---------------- Descubrir-----------------------------------------------------------------------
document.getElementById("buttonReviews").addEventListener("click", () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=71949b65aff64acdb6a0fce55fb7fb1d&sort_by=popularity.desc&page=1&primary_release_date.gte=2019-01-01')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                //let searchEl = document.getElementById("root");
                const listmovie2 = data.results.map(element => {
                    return `<div class="results">
                                <div class="movie-card">
                                    <img class="movie-img" src= "${'https://image.tmdb.org/t/p/w500'+element.poster_path}"> 
                                    <div class="movie-text"> 
                                        <p class="movie-tittle"> ${element.title}</p>
                                        <p class="movie-year">Year: ${element.release_date}</p>
                                        <p class="movie-review"> Reseña: ${element.overview}</p>
                                    </div>
                                </div>
                            </div>`
                }).join('');
                tqllr.innerHTML = listmovie2;
            })
    })
    //------------------------   /SALA 1/  ------------------------------------------------------------
    // Primera pelicula x-men
document.getElementById("room1").addEventListener("click", () => {

        fetch('http://www.omdbapi.com/?i=tt0120903&apikey=f37c3cde&s=')
            .then(res => res.json())
            .then(data => {
                let contMovieXM = document.createElement("div");
                contMovieXM.className = "question";
                sala1.appendChild(contMovieXM);
                contMovieXM.innerHTML += `<img src='https://m.media-amazon.com/images/M/MV5BZmIyMDk5NGYtYjQ5NS00ZWQxLTg2YzQtZDk1ZmM4ZDBlN2E3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'>
                                <h1>¿Quién es el director de la película X-Men?</h1>`
                let imputQuestionXM1 = document.createElement("button");
                imputQuestionXM1.className = "butQ";
                imputQuestionXM1.textContent = "Opcion A: Simon Kinberg";
                sala1.appendChild(imputQuestionXM1);
                let imputQuestionXM2 = document.createElement("button");
                imputQuestionXM2.className = "butQ";
                imputQuestionXM2.textContent = "Opcion B: Bryan Singer";
                sala1.appendChild(imputQuestionXM2);
                let imputQuestionXM3 = document.createElement("button");
                imputQuestionXM3.className = "butQ";
                imputQuestionXM3.textContent = "Opcion C: Matthew Vaughn";
                sala1.appendChild(imputQuestionXM3);
                //imprimo otra película star wars iv
                let contMovieST = document.createElement("div");
                contMovieST.className = "question";
                sala1.appendChild(contMovieST);
                contMovieST.innerHTML += `<img src='https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'>
                                <h1>¿Cuál fue el año de estreno de la película Star Wars IV Una nueva esperanza?</h1>`
                let imputQuestionST1 = document.createElement("button");
                imputQuestionST1.className = "butQ";
                imputQuestionST1.textContent = "Opcion A: 1975";
                sala1.appendChild(imputQuestionST1);
                let imputQuestionST2 = document.createElement("button");
                imputQuestionST2.className = "butQ";
                imputQuestionST2.textContent = "Opcion B: 1977";
                sala1.appendChild(imputQuestionST2);
                let imputQuestionST3 = document.createElement("button");
                imputQuestionST3.className = "butQ";
                imputQuestionST3.textContent = "Opcion C: 1979";
                sala1.appendChild(imputQuestionST3);
                //imprimo otra película harry potter 7.2
                let contMovieHP = document.createElement("div");
                contMovieHP.className = "question";
                sala1.appendChild(contMovieHP);
                contMovieHP.innerHTML += `<img src='https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'>
                                <h1>¿Cuál actor interpreta a Voldemort en la película Harry Potter y las reliqueas de la muerte parte II?</h1>`
                let imputQuestionHP1 = document.createElement("button");
                imputQuestionHP1.className = "butQ";
                imputQuestionHP1.textContent = "Opcion A: Alan Rickman";
                sala1.appendChild(imputQuestionHP1);
                let imputQuestionHP2 = document.createElement("button");
                imputQuestionHP2.className = "butQ";
                imputQuestionHP2.textContent = "Opcion B: Daniel Radcliffe";
                sala1.appendChild(imputQuestionHP2);
                let imputQuestionHP3 = document.createElement("button");
                imputQuestionHP3.className = "butQ";
                imputQuestionHP3.textContent = "Opcion C: Ralph Fiennes";
                sala1.appendChild(imputQuestionHP3);
                //console.log(data);
            }); //Cierre then data peli 
    }) //Cierre sala 1
    // ------------------------   /SALA 2/  ------------------------------------------------------------
    // Primera pelicula guardianes galaxia 2
document.getElementById("room2").addEventListener("click", () => {
        fetch('http://www.omdbapi.com/?i=tt0076759&apikey=f37c3cde&s=')
            .then(res => res.json())
            .then(data => {
                let contMovieGX = document.createElement("div");
                contMovieGX.className = "question";
                let sala1 = document.getElementById('root');
                sala1.appendChild(contMovieGX);
                contMovieGX.innerHTML += `<img src='https://m.media-amazon.com/images/M/MV5BN2MwNjJlODAtMTc1MS00NjkwLTg2NDMtYzFjZmU2MGM1YWUwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SX300.jpg'>
                            <h1>¿Quién es el actor protagonista de la película Guardianes de la Galaxia Vol 2?</h1>`
                let imputQuestionGX1 = document.createElement("button");
                imputQuestionGX1.className = "butQ";
                imputQuestionGX1.textContent = "Opcion A: Chris Pratt";
                sala1.appendChild(imputQuestionGX1);
                let imputQuestionGX2 = document.createElement("button");
                imputQuestionGX2.className = "butQ";
                imputQuestionGX2.textContent = "Opcion B: Vin Diesel";
                sala1.appendChild(imputQuestionGX2);
                let imputQuestiongx3 = document.createElement("button");
                imputQuestiongx3.className = "butQ";
                imputQuestiongx3.textContent = "Opcion C: Chris Evans";
                sala1.appendChild(imputQuestiongx3);
                //imprimo otra película titanic
                let contMovieT = document.createElement("div");
                contMovieT.className = "question";
                sala1.appendChild(contMovieT);
                contMovieT.innerHTML += `<img src='https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg'>
                            <h1>¿Cuántos premios Oscars ganó la película Titanic?</h1>`
                let imputQuestionT1 = document.createElement("button");
                imputQuestionT1.className = "butQ";
                imputQuestionT1.textContent = "Opcion A: 10";
                sala1.appendChild(imputQuestionT1);
                let imputQuestionT2 = document.createElement("button");
                imputQuestionT2.className = "butQ";
                imputQuestionT2.textContent = "Opcion B: 11";
                sala1.appendChild(imputQuestionT2);
                let imputQuestionT3 = document.createElement("button");
                imputQuestionT3.className = "butQ";
                imputQuestionT3.textContent = "Opcion C: 12";
                sala1.appendChild(imputQuestionT3);
                //imprimo otra película avengers
                let contMovieA = document.createElement("div");
                contMovieA.className = "question";
                sala1.appendChild(contMovieA);
                contMovieA.innerHTML += `<img src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'>
                            <h1>¿Quién es el director de la película Avengers?</h1>`
                let imputQuestionA1 = document.createElement("button");
                imputQuestionA1.className = "butQ";
                imputQuestionA1.textContent = "Opcion A: Joss Whedon";
                sala1.appendChild(imputQuestionA1);
                let imputQuestionA2 = document.createElement("button");
                imputQuestionA2.className = "butQ";
                imputQuestionA2.textContent = "Opcion B: Anthony Russo";
                sala1.appendChild(imputQuestionA2);
                let imputQuestionA3 = document.createElement("button");
                imputQuestionA3.className = "butQ";
                imputQuestionA3.textContent = "Opcion C: Joe Russo";
                sala1.appendChild(imputQuestionA3);
                //console.log(data);
            }); //Cierre then data peli
    }) //Cierre sala 2
    // ------------------------   /SALA 3/  ------------------------------------------------------------
    // Primera pelicula dumbo
document.getElementById("room3").addEventListener("click", () => {
        fetch('http://www.omdbapi.com/?i=tt0076759&apikey=f37c3cde&s=')
            .then(res => res.json())
            .then(data => {
                let contMovieD = document.createElement("div");
                contMovieD.className = "question";
                sala1.appendChild(contMovieD);
                contMovieD.innerHTML += `<img src='https://m.media-amazon.com/images/M/MV5BNWVmNWQ2OTQtNzJlNC00ZmQwLTg4ZTktZTNmM2IxZTlkOGM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'>
                        <h1>¿Cuál parte del cuerpo acomplejaba al protagonista de la película Dumbo?</h1>`
                let imputQuestionD1 = document.createElement("button");
                imputQuestionD1.className = "butQ";
                imputQuestionD1.textContent = "Opcion A: La trompa";
                sala1.appendChild(imputQuestionD1);
                let imputQuestionD2 = document.createElement("button");
                imputQuestionD2.className = "butQ";
                imputQuestionD2.textContent = "Opcion B: La cola";
                sala1.appendChild(imputQuestionD2);
                let imputQuestionD3 = document.createElement("button");
                imputQuestionD3.className = "butQ";
                imputQuestionD3.textContent = "Opcion C: Las orejas";
                sala1.appendChild(imputQuestionD3);
                //imprimo otra película rouge one
                let contMovieR = document.createElement("div");
                contMovieR.className = "question";
                sala1.appendChild(contMovieR);
                contMovieR.innerHTML += `<img src='https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg'>
                        <h1>¿Cuál es el nombre de la actriz principal de la película Rogue One: Una Historia de Star Wars?</h1>`
                let imputQuestionR1 = document.createElement("button");
                imputQuestionR1.className = "butQ";
                imputQuestionR1.textContent = "Opcion A: Felicity Jones";
                sala1.appendChild(imputQuestionR1);
                let imputQuestionR2 = document.createElement("button");
                imputQuestionR2.className = "butQ";
                imputQuestionR2.textContent = "Opcion B: Carrie Fisher";
                sala1.appendChild(imputQuestionR2);
                let imputQuestionR3 = document.createElement("button");
                imputQuestionR3.className = "butQ";
                imputQuestionR3.textContent = "Opcion C: Daisy Ridley";
                sala1.appendChild(imputQuestionR3);
                //imprimo otra película toy story
                let contMovieTS = document.createElement("div");
                contMovieTS.className = "question";
                sala1.appendChild(contMovieTS);
                contMovieTS.innerHTML += `<img src='https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg'>
                        <h1>¿Quién es el director de la película Toy Story?</h1>`
                let imputQuestionTS1 = document.createElement("button");
                imputQuestionTS1.className = "butQ";
                imputQuestionTS1.textContent = "Opcion A: Josh Cooley";
                sala1.appendChild(imputQuestionTS1);
                let imputQuestionTS2 = document.createElement("button");
                imputQuestionTS2.className = "butQ";
                imputQuestionTS2.textContent = "Opcion B: John Lasseter";
                sala1.appendChild(imputQuestionTS2);
                let imputQuestionTS3 = document.createElement("button");
                imputQuestionTS3.className = "butQ";
                imputQuestionTS3.textContent = "Opcion C: Lee Unkrich";
                sala1.appendChild(imputQuestionTS3);
                //console.log(data);
            }); //Cierre then data peli
    }) //Cierre sala 3