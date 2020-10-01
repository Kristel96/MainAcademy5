let apikey = "3bcb757b3ebe4adeeb1c3a7d2a3c4dcc";
let language = "en-US";
let page = 1;
let imageServer = "https://image.tmdb.org/t/p/w300/";
let urlBase = "https://api.themoviedb.org/3/movie/";
let searchUrlBase = "https://api.themoviedb.org/3/search/";


getTopRated();

function getTopRated(){
    let url =`${urlBase}top_rated?api_key=${apikey}&language=${language}&page=${page}`;
    getData(url)
}
function getLatest() {
    let url =`${urlBase}now_playing?api_key=${apikey}&language=${language}`;
    getData(url)
}
function getPopular() {
    let url =`${urlBase}popular?api_key=${apikey}&language=${language}&page=${page}`;
    getData(url)
}
function getUpcoming(){
    let url =`${urlBase}upcoming?api_key=${apikey}&language=${language}&page=${page}`;
    getData(url)
}


function searchMovie(keyword){
    let url =`${searchUrlBase}movie?api_key=${apikey}&query=${keyword}&page=${page}`;
    getData(url)
}
let search = getE("search");

search.onblur = function () {
    sendKeyWord()
};

search.onkeydown =function(event){
if(event.which ===13){
    sendKeyWord(this.value);
}};

function sendKeyWord(key){
    let keyword = key;
    if(keyword !==""){
        searchMovie(keyword);
    }
}



getE("latest").onclick = function () {
    getLatest();
};
getE("toprated").onclick = function () {
    getTopRated();
};

getE("popular").onclick = function () {
    getPopular();
};

getE("upcoming").onclick = function () {
    getUpcoming();
};




function getData(url){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parse(xhttp.response);
            let filmsArray =  response.results;
            let container = getE("main");
            container.innerHTML = "";
            filmsArray.forEach(function (item) {
                createMovieCard(item, container);
            })
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}




function createMovieCard(item, container) {



    let elementCont = crEl("div");
    elementCont.className = "element-container";
    let imgWrap = crEl("div");
    imgWrap.className ="img-wrap";
    let poster = crEl("img");
    poster.src = imageServer+item.poster_path;
    imgWrap.appendChild(poster);
    elementCont.appendChild(imgWrap);


    let textContainer = crEl("div");
    textContainer.className = "text-wrap";

    let titleElement = crEl("p");
    let titleHeadingWrap = crEl("span");
    let titleHeading = crTe("Title: ");
    titleHeadingWrap.appendChild(titleHeading);
    let titleValue = crTe(item.title);
    titleElement.appendChild(titleHeadingWrap);
    titleElement.appendChild(titleValue);

    let overviewElement = crEl("p");
    let overviewHeadingWrap = crEl("span");
    let overviewHeading = crTe("Description: ");
    overviewHeadingWrap.appendChild(overviewHeading);
    let overview = crTe(item.overview);
    overviewElement.appendChild(overviewHeadingWrap);
    overviewElement.appendChild(overview);

    let voteElement = crEl("div");
    let voteImg = crEl("img");
    voteImg.className = "voteImg";
    voteImg.src = "like.svg";
    let voteHeading = crTe(item.vote_count);

    voteElement.appendChild(voteImg);
    voteElement.appendChild(voteHeading);


    textContainer.appendChild(titleElement);
    textContainer.appendChild(overviewElement);
    textContainer.appendChild(voteElement);
    elementCont.appendChild(textContainer);
    container.appendChild(elementCont);
}

function crEl(element) {
return document.createElement(element);
}
function crTe(text) {
    return document.createTextNode(text);
}
function getE(id) {
    return document.getElementById(id);
}
// adult: false
// backdrop_path: "/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg"
// genre_ids: [10749]
// id: 724089
// original_language: "en"
// original_title: "Gabriel's Inferno Part II"
//------ overview: "Професор Габріель Емерсон, нарешті, дізнається правду про особу Джулії Мітчел, але його усвідомлення приходить занадто пізно. Джулії набридло чекати, коли шановний  Данте згадає про неї, і більше не хоче мати з ним нічого спільного. Чи може Габріель повернути її прихильність, перш ніж вона знайде кохання десь інакше?"
// popularity: 14.254
// poster_path: "/pci1ArYW7oJ2eyTo2NMYEKHHiCP.jpg"
// release_date: "2020-07-31"
//---- title: "Інферно Габрієля 2"
// video: false
// vote_average: 9
// vote_count: 809
