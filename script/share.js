//When Thumbs Up Button is clicked
    thumbsUpBtn.addEventListener('click', ()=> {
        if (thumbsUpBtn.querySelector('i.fa-solid').classList.contains('text-white')) {
            thumbsUpBtn.querySelector('i.fa-solid').classList.remove('text-white');
            thumbsUpBtn.querySelector('i.fa-solid').classList.add('text-accent');
            thumbsUpBtn.querySelector('i.fa-solid').style.opacity = "1";
            thumbsDownBtn.querySelector('i.fa-solid').classList.remove("text-accent");
            thumbsDownBtn.querySelector('i.fa-solid').classList.add("text-white");
            
            upvotes.textContent = `+${upvoteNum + 1} upvotes`
            upvotes.style.color = "hsl(var(--clr-accent, 60 100% 50%))";
        } 
        else {
            thumbsUpBtn.querySelector('i.fa-solid').classList.remove("text-accent");
            thumbsUpBtn.querySelector('i.fa-solid').classList.add("text-white");
            thumbsUpBtn.querySelector('i.fa-solid').style.opacity = "0.8";
            
            upvotes.textContent = `+${upvoteNum} upvotes`
            upvotes.style.color = "hsl(var(--clr-white, 0 0% 100%))";
    } 

    });

//When Thumbs Down Button is clicked
    thumbsDownBtn.addEventListener('click', ()=> {
        if (thumbsDownBtn.querySelector('i.fa-solid').classList.contains('text-white')) {
            thumbsDownBtn.querySelector('i.fa-solid').classList.remove('text-white');
            thumbsDownBtn.querySelector('i.fa-solid').classList.add('text-accent');
            thumbsDownBtn.querySelector('i.fa-solid').style.opacity = "1";
            thumbsUpBtn.querySelector('i.fa-solid').classList.remove("text-accent");
            thumbsUpBtn.querySelector('i.fa-solid').classList.add("text-white");
            
            upvotes.textContent = `+${upvoteNum - 1} upvotes`
            upvotes.style.color = "hsl(var(--clr-light-gray, 0% 0% 67%))";
        } 
        else {
            thumbsDownBtn.querySelector('i.fa-solid').classList.remove("text-accent");
            thumbsDownBtn.querySelector('i.fa-solid').classList.add("text-white");
            thumbsDownBtn.querySelector('i.fa-solid').style.opacity = "0.8";
            
            upvotes.textContent = `+${upvoteNum} upvotes`
            upvotes.style.color = "hsl(var(--clr-white, 0 0% 100%))";
    } 

    });