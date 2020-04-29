let body = document.body;
let audioPlayer = document.getElementById("audio-player");
let record = document.getElementById("record");
let recordPlayerArm = document.getElementById("arm");
let armOn = false;
let musicPlayed = false;

localStorage.setItem('background-color', 'pink');


body.classList.add("up");
recordPlayerArm.style.animation="armOff 0s linear 0s 1 forwards";

function removeArm() {
    recordPlayerArm.style.animation = "armOff 0.3s linear 0s 1 forwards"
    record.style.animation = "";
    armOn = false;
}

function addArm() {
    recordPlayerArm.style.animation = "armOn 0.3s linear 0s 1 forwards"
    record.style.animation = "recordSpin 1s linear 0.3s infinite";
    armOn = true;
}

function moveRecordPlayerArm() {
    if (armOn) {
        removeArm();
        setTimeout(function() {
            audioPlayer.pause();
        }, 300);
    } else {
        addArm();
        setTimeout(function() {
            audioPlayer.play();
        }, 300);
    }
}

recordPlayerArm.onclick = function() {
    moveRecordPlayerArm();
    if (!musicPlayed) {
        musicPlayed = true;
    }
}

let upCard = document.getElementById("up-movie");
let ratatouilleCard = document.getElementById("ratatouille-movie");
let monstersIncCard = document.getElementById("monsters-movie");
let toyStoryCard = document.getElementById("toystory-movie");
let findingNemoCard = document.getElementById("nemo-movie");
let incrediblesCard = document.getElementById("incredibles-movie");

function playSong(audioFile, recordImg, movie) {
    audioPlayer.pause();
    audioPlayer.setAttribute('src', audioFile);
    record.setAttribute('src', recordImg);
    body.setAttribute('class', '');
    body.classList.add(movie);
    if (armOn) {
        audioPlayer.play();
        recordPlayerArm.style.animation = "armOn 0s linear 0s 1 forwards"
    } else {
        recordPlayerArm.style.animation = "armOff 0s linear 0s 1 forwards"
    }
}

upCard.onclick = function() {
    playSong('assets/music/up-song.mp3', 'assets/img/record-up.png', 'up');
    localStorage.setItem('background-color', 'pink');
};

ratatouilleCard.onclick = function () {
    playSong('assets/music/ratatouille-song.mp3', 'assets/img/record-ratatouille.png', 'ratatouille');
    localStorage.setItem('background-color', 'yellow');
};

monstersIncCard.onclick = function() {
    playSong('assets/music/monsters-song.mp3', 'assets/img/record-monstersinc.png', 'monstersinc');
    localStorage.setItem('background-color', 'green');
};

toyStoryCard.onclick = function() {
    playSong('assets/music/toystory-song.mp3', 'assets/img/record-toystory.png', 'toystory');
    localStorage.setItem('background-color', 'orange');
};

findingNemoCard.onclick = function() {
    playSong('assets/music/nemo-song.mp3', 'assets/img/record-nemo.png', 'nemo');
    localStorage.setItem('background-color', 'blue');
};

incrediblesCard.onclick = function() {
    playSong('assets/music/incredibles-song.mp3','assets/img/record-incredibles.png','incredibles');
    localStorage.setItem('background-color', 'red');
};

let musicButton = document.getElementById("show-music");
let playerButton = document.getElementById("show-player");
let playerStage = document.getElementById("outer-stage");
let musicStage = document.getElementById("music-selection");

let helpButton = document.getElementById("help-button");
let helpText = document.getElementById("help-text");

helpButton.onmouseover = function() {
    helpText.classList.remove("hidden");
}

helpButton.onmouseout = function() {
    helpText.classList.add("hidden");
}

function showMusic() {
    musicStage.classList.remove("hidden");
    playerStage.classList.add("hidden");
    musicButton.classList.add("hidden");
    playerButton.classList.remove("hidden");
    helpText.innerHTML = "Click on a record </br> change the music.";
}

function showPlayer() {
    musicStage.classList.add("hidden");
    playerStage.classList.remove("hidden");
    playerButton.classList.add("hidden");
    musicButton.classList.remove("hidden");
    if (armOn) {
        recordPlayerArm.style.animation = "armOn 0s linear 0s 1 forwards"
        record.style.animation = "recordSpin 1s linear 0s infinite";
    } else {
        recordPlayerArm.style.animation = "armOff 0s linear 0s 1 forwards"
    }
    helpText.innerHTML = "Click on the arm to </br> start or stop the music.";
}

musicButton.onclick = showMusic;
playerButton.onclick = showPlayer;

audioPlayer.onEnded = removeArm;