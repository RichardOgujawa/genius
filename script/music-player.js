const albumSongsJSON = JSON.stringify(
    [
        {
            "title": "Talk Of The Town",
            "song": "../sound/jack-harlow-talk-of-the-town.mp3",
        },

        {
            "title": "Young Harleezy",
            "song": "../sound/jack-harlow-young-harleezy.mp3"
        },

        {
            "title": "I'd Do Anything To Make You Smile",
            "song": "../sound/jack-harlow-id-do-anything-to-make-you-smile.mp3"
        },

        {
            "title": "First Class",
            "song": "../sound/jack-harlow-first-class.mp3"
        },

        {
            "title": "Dua Lipa",
            "song": "../sound/jack-harlow-dua-lipa.mp3"
        },

        {
            "title": "Side Piece",
            "song": "../sound/jack-harlow-side-piece.mp3"
        },

        {
            "title": "Movie Star (ft. Pharrell Williams)",
            "song": "../sound/jack-harlow-movie-star-feat-pharrell-williams.mp3"
        },

        {
            "title": "Lil Secret",
            "song": "../sound/jack-harlow-lil-secret.mp3"
        },
        {
            "title": "I Got A Shot",
            "song": "../sound/jack-harlow-i-got-a-shot.mp3"
        },

        {
            "title": "Churchill Downs (ft. Drake)",
            "song": "../sound/jack-harlow-churchill-downs-feat-drake.mp3"
        },

        {
            "title": "Like A Blade of Grass",
            "song": "../sound/jack-harlow-like-a-blade-of-grass.mp3"
        },

        {
            "title": "Parent Trap (ft. Justin Timberlake)",
            "song": "../sound/jack-harlow-parent-trap-feat-justin-timberlake.mp3"
        },

        {
            "title": "Poison (ft. Lil Wayne)",
            "song": "../sound/jack-harlow-poison-feat-lil-wayne.mp3"
        },

        {
            "title": "Nail Tech",
            "song": "../sound/jack-harlow-nail-tech.mp3"
        },

        {
            "title": "State Fair",
            "song": "../sound/jack-harlow-state-fair.mp3"
        }
    ]
)


const albumSongsData = JSON.parse(albumSongsJSON);

const playBtn = document.querySelector(".fa-play");
const playPauseBtn = document.querySelector('#play-pause-btn');
// const pauseBtn = document.querySelector(".fa-pause");

var audio = document.getElementById("audio");
var currentSong = document.querySelector("#current-song");
const audioPlaylistSong = document.querySelectorAll(".playlist_song");

const progress = document.querySelector("#progress");
const progressContainer = document.querySelector("#progress-container");

const levelBar = document.querySelectorAll(".level_bar");

const countingDown = document.querySelector("#counting-down");

const fullTime = document.querySelector("#full-time")




//What happens when user clicks on song
audioPlaylistSong.forEach((item, index) => {
    item.addEventListener("click", () => {
        var i = 0;
        //Clears all stylings on other elements
        for (i < 0; i < audioPlaylistSong.length - 1; i++) {
            audioPlaylistSong[i].style.backgroundColor = "transparent";
            audioPlaylistSong[i].style.color = "hsl(var(--clr-dark, 0 0% 9%))";
        }

        //Animate level bars on click
        for(j=0; j<levelBar.length; j++){
            levelBar[j].style.animationDuration = "0.5s";
        }

        //Add special styling to selected element
        currentSong.innerHTML = `${audioPlaylistSong[index].innerHTML}`;
        item.style.backgroundColor = "black";
        item.style.color = "hsl(var(--clr-accent, 60 100% 50%))";

        for (j = 0; j < albumSongsData.length; j++) {
            if (audioPlaylistSong[index].innerHTML === albumSongsData[j].title) {
                console.log(albumSongsData[j].song);
                audio.setAttribute("src", `${albumSongsData[j].song}`);
                console.log(audio);

                playPauseBtn.querySelector('i.fa').classList.remove('fa-play'); 
                playPauseBtn.querySelector('i.fa').classList.add('fa-pause'); 
 
                audio.play();
            }
        }



        //Get duration of songs
        audio.onloadedmetadata = function () {
            var x = audio.duration;
            console.log("THIS" + duration);
            var duration = Math.ceil(x);

            var minute = Math.floor(duration / 60);
            var second = duration % 60;


            if (second < 10) {
                fullTime.textContent = minute+':0'+second;
            } else if(second >= 10) {
                console.log("More"); 
                fullTime.textContent = minute+':'+second;
            }
            console.log(second);
        }

    })

});


playPauseBtn.addEventListener("click", () => {

    if(playPauseBtn.querySelector('i.fa').classList.contains('fa-play'))
    {
        //changes the play button to a pause button using the Font Awesome classes
        playPauseBtn.querySelector('i.fa').classList.remove('fa-play'); 
        playPauseBtn.querySelector('i.fa').classList.add('fa-pause'); 

        //Set the audio duration of the first track
        var x = audio.duration;
        console.log("THIS" + duration);
        var duration = Math.ceil(x);

        var minute = Math.floor(duration / 60);
        var second = duration % 60;

        if (second < 10) {
            fullTime.textContent = minute+':0'+second;
        } else if(second >= 10) {
            console.log("More"); 
            fullTime.textContent = minute+':'+second;
        }
        console.log(second);

        //
        audioPlaylistSong[0].style.backgroundColor = "black";
        audioPlaylistSong[0].style.color = "hsl(var(--clr-accent, 60 100% 50%))";


        audio.play();

        for(i=0; i<levelBar.length; i++){
        levelBar[i].style.animationDuration = "0.5s";
    }}

    else
    {
        playPauseBtn.querySelector('i.fa').classList.add('fa-play'); 
        playPauseBtn.querySelector('i.fa').classList.remove('fa-pause'); 

        audio.pause();

        for(i=0; i<levelBar.length; i++){
        levelBar[i].style.animationDuration = "0s";
    }
    }
})

function updateProgress(e){
    //e.srcElement or event.srcElement is the event object which contains details about what just occured to that audio source elment.
    //We can get the currentTime and duration from the e, which is the event object that we get from listening to the audio
    //If you're trying to get data about your event, use event objects like e.
    const currentTime = e.srcElement.currentTime;
    const duration = e.srcElement.duration;
    // const progressPercent = (currentTime/duration)*100;
    const progressPercent = (currentTime/duration)*100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e){
    //get width of progress bar
    const width = this.clientWidth;

    //get x position of click within progress bar/container
    const clickX = e.offsetX;

    const duration = audio.duration;

    //This will set the current time to wherever we click, because it gets the fraction of where we click over the full width (duration) and multiplies it by the duration
    audio.currentTime = (clickX / width * duration)

}


//Time update is thus that when the song is playing it will constantly be called. We are calling the function updateProgress as the time updates.

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

//There's a lot of stuff in the audio API for HTML and Javascript that you can look into.
audio.addEventListener('ended', ()=> {

})