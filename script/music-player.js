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
        currentSong.innerHTML = `${audioPlaylistTitle[index].innerHTML}`;
        item.style.backgroundColor = "black";
        item.style.color = "hsl(var(--clr-accent, 60 100% 50%))";

        for (j = 0; j < albumSongsData.length; j++) {
            if (audioPlaylistTitle[index].innerHTML === albumSongsData[j].title) {
                audio.setAttribute("src", `${albumSongsData[j].song}`);

                playPauseBtn.querySelector('i.fa').classList.remove('fa-play'); 
                playPauseBtn.querySelector('i.fa').classList.add('fa-pause'); 
 
                audio.play();
            }
        }



        //Get duration of songs
        audio.onloadedmetadata = function () {
            var x = audio.duration;
            var duration = Math.ceil(x);

            var minute = Math.floor(duration / 60);
            var second = duration % 60;


            if (second < 10) {
                fullTime.textContent = minute+':0'+second;
            } else if(second >= 10) {
                fullTime.textContent = minute+':'+second;
            }
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
        var duration = Math.ceil(x);

        var minute = Math.floor(duration / 60);
        var second = duration % 60;

        if (second < 10) {
            fullTime.textContent = minute+':0'+second;
        } else if(second >= 10) {
            fullTime.textContent = minute+':'+second;
        }

        //No other audio playlist song is currently selected then highlight the first one
        for(let i = 0; i < audioPlaylistSong.length; i++){
            if(audioPlaylistSong[i].style.backgroundColor == "black") {
                console.log("track already selected")
            } else {
                audioPlaylistSong[0].style.backgroundColor = "black";
                audioPlaylistSong[0].style.color = "hsl(var(--clr-accent, 60 100% 50%))";
            }
        }
        
      


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
