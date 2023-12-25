console.log("Welcome To Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Rolex Bgm - Vikram" , filePath:"songs/1.mp3", coverPath:"covers/c2.jpg"},
    {songName: "Naa Ready- LEO" , filePath:"songs/2.mp3", coverPath:"covers/c1.jpg"},
    {songName: "Galiyaan -Ek Villain" , filePath:"songs/3.mp3", coverPath:"covers/c3.jpg"},
    {songName: "SRK Hit-List" , filePath:"songs/4.mp3", coverPath:"covers/c4.jpg"},
    {songName: "Naseeb - Vishal" , filePath:"songs/5.mp3", coverPath:"covers/c5.jpg"},
    {songName: "Kuley Kuley - YYHS" , filePath:"songs/6.mp3", coverPath:"covers/c6.jpg"},
    {songName: "Dil - Ek Villain 2" , filePath:"songs/7.mp3", coverPath:"covers/c7.jpg"},
    {songName: "Bambaiya Slang" , filePath:"songs/8.mp3", coverPath:"covers/c8.jpg"}
]

songItems.forEach((element,i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// AudioElement.play();


//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
          audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
                gif.style.opacity = 0;

     }
})
//Listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    //Update SeekBar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

//For SongItem   Play / Pause
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

} 
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        Index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
         gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
    })
})

//For Previous and Next Song Play
document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 8) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
})