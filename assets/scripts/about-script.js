let body = document.body;
let leftButton = document.getElementById("left-button");
let rightButton = document.getElementById("right-button");
let image = document.getElementById("movie-img");
let movieTitle = document.getElementById("movie-title");
let songUsed = document.getElementById("song-used");
let artist = document.getElementById("artist");
let copyrightInfo = document.getElementById("copyright-info");

let backgroundColor = localStorage.getItem("background-color");

if (backgroundColor==="pink") {
    body.style.backgroundColor = "#F2BFDD";
} else if (backgroundColor==="yellow") {
    body.style.backgroundColor = "#F1F29B";
} else if (backgroundColor==="green") {
    body.style.backgroundColor = "#D3F0CC";
} else if (backgroundColor==="orange") {
    body.style.backgroundColor = "#F7BC86";
} else if (backgroundColor==="blue") {
    body.style.backgroundColor = "#A4D8F5";
} else if (backgroundColor==="red") {
    body.style.backgroundColor = "#F28F95";
}

index = 0;

function changeImage(img, title, song, creator, copyright) {
    image.setAttribute('src', img);
    movieTitle.innerHTML=title;
    songUsed.innerHTML=song;
    artist.innerHTML=creator;
    copyrightInfo.innerHTML=copyright;
}

function moveImg(diff) {
    index += diff;
    index_actual = index % 6;
    if (index_actual === 0) {
        changeImage('assets/img/movies/UP.png', "Up", "Song Used: Married Life", "Composer: Michael Giacchino", "&copy;2009 Walt Disney Records");
    } else if (index_actual===1 || index_actual===-5) {
        changeImage('assets/img/movies/RATATOUILLE.png', "Ratatouille", "Song Used: Le Festin", "Perfomed By: Camille", "&copy;2007 Walt Disney Records");
    } else if (index_actual===2 || index_actual===-4) {
        changeImage('assets/img/movies/MONSTERS.png', "Monsters, Inc.", "Song Used: Monsters, Inc.", "Composed By: Randy Newman", "&copy;2001 Walt Disney Records");
    } else if (index_actual===3 || index_actual===-3) {
        changeImage('assets/img/movies/TOYSTORY.png', "Toy Story", "Song Used: You've Got a Friend in Me", "Written and Performed By: Randy Newman", "&copy;1995 Walt Disney Records");
    } else if (index_actual===4|| index_actual===-2) {
        changeImage('assets/img/movies/NEMO.png', "Finding Nemo", "Song Used: Beyond The Sea", "Performed By: Robbie Williams", "&copy;2003 Walt Disney Records")
    } else {
        changeImage('assets/img/movies/INCREDIBLES.png', "The Incredibles", "Song Used: The Glory Days", "Composed By: Michael Giacchino", "&copy;2004 Walt Disney Records");
    }
}

rightButton.onclick = function() {
    moveImg(1);
}

leftButton.onclick = function() {
    moveImg(-1);
}
