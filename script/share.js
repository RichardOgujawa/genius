const thumbsUpBtn = document.querySelector("#thumbs-up-button");

const thumbsDownBtn = document.querySelector("#thumbs-down-button");


const upvotes = document.querySelector("#upvotes");
var upvoteNum = 9;


    
//When Thumbs Up Button is clicked
    thumbsUpBtn.addEventListener('click', ()=> {
        if (thumbsUpBtn.querySelector('i.fa-solid').style.color == "white") {
            thumbsUpBtn.querySelector('i.fa-solid').style.color = "yellow";
            thumbsDownBtn.querySelector('i.fa-solid').style.color = "white";
            
            upvotes.textContent = `+${upvoteNum + 1} upvotes`
        } 
        else {
            thumbsUpBtn.querySelector('i.fa-solid').style.color = "white";
            
            upvotes.textContent = `+${upvoteNum} upvotes`
    } 

    });

//When Thumbs Down Button is clicked
    thumbsDownBtn.addEventListener('click', ()=> {
        if (thumbsDownBtn.querySelector('i.fa-solid').style.color == "white") {
            thumbsDownBtn.querySelector('i.fa-solid').style.color = "yellow";
            thumbsUpBtn.querySelector('i.fa-solid').style.color = "white";
            
            upvotes.textContent = `+${upvoteNum - 1} upvotes`
        } 
        else {
            thumbsDownBtn.querySelector('i.fa-solid').style.color = "white";
            
            upvotes.textContent = `+${upvoteNum} upvotes`
    } 
    });
    
