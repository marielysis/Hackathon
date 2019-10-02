//navegacion entre secciones/botones

document.getElementById("imagen-logo").addEventListener("click", () =>{
document.getElementById("home-container").style.display="block";
document.getElementById("reviews-container" ).style.display="none";
document.getElementById("rooms-container").style.display="none";
document.getElementById("results-container").style.display="none";
document.getElementById("root").innerHTML="";
});

document.getElementById("buttonReviews").addEventListener("click", () =>{
document.getElementById("home-container").style.display="none";
document.getElementById("reviews-container" ).style.display="block";
document.getElementById("rooms-container").style.display="none";
document.getElementById("results-container").style.display="none";
document.getElementById("root").innerHTML="";
});


document.getElementById("buttonPlay").addEventListener("click", () =>{
document.getElementById("home-container").style.display="none";
document.getElementById("reviews-container" ).style.display="none";
document.getElementById("rooms-container").style.display="block";
document.getElementById("results-container").style.display="none";
document.getElementById("root").innerHTML="";
});


document.getElementById("buttonPlay").addEventListener("click", () =>{
document.getElementById("home-container").style.display="none";
document.getElementById("reviews-container" ).style.display="none";
document.getElementById("rooms-container").style.display="block";
document.getElementById("results-container").style.display="none";
document.getElementById("root").innerHTML="";
});






document.getElementById('traerData').addEventListener('click', function() {
    const titleSearch = document.getElementById('searchBar').value;
    const request = new Request('http://www.omdbapi.com/?i=tt3896198&apikey=f37c3cde&s=' + titleSearch);

    fetch(request).then(function(result) {
        return result.json();
    }).then(function(data) {
        console.log(data);

        let searchEl = document.getElementById('searchResult');
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



//const arrayImdbID = ["tt1877832", "tt1785572", "tt0784896", ]