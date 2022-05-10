const fbShareBtn = document.querySelector("#fb-share-button");

const twitterShareBtn = document.querySelector("#twitter-share-button");


const thumbsUpBtn = document.querySelector("#thumbs-up-button");
const thumbsUpImg = document.querySelectorAll(".thumbs_up_img");

const thumbsDownBtn = document.querySelector("#thumbs-down-button");
const thumbsDownImg = document.querySelectorAll(".thumbs_down_img");

const socialAlert = document.querySelector("#social-alert");
const upvotes = document.querySelector("#upvotes");
var upvoteNum = 9;
upvotes.textContent = `+${upvoteNum} upvotes`

thumbsUpBtn.addEventListener("click", () => {
    if (thumbsUpImg[0].style.display == "none") {
        thumbsUpImg[0].style.display = "block";
        thumbsUpImg[0].style.opacity = "1";
        thumbsUpImg[1].style.display = "none";
        thumbsDownImg[0].style.display  = "none";
        thumbsDownImg[1].style.display = "block";
        upvotes.textContent = `+${upvoteNum + 1} upvotes`
    } else if(thumbsUpImg[0].style.display == "block") {
        thumbsUpImg[1].style.display = "block";
        thumbsUpImg[0].style.display = "none";
        upvotes.textContent = `+${upvoteNum} upvotes`
    } 
});

thumbsDownBtn.addEventListener("click", () => {
    if (thumbsDownImg[0].style.display == "none") {
        thumbsDownImg[0].style.display = "block";
        thumbsDownImg[0].style.opacity = "1";
        thumbsDownImg[1].style.display = "none";
        thumbsUpImg[0].style.display  = "none";
        thumbsUpImg[1].style.display = "block";
        upvotes.textContent = `+${upvoteNum - 1} upvotes`
    } else if(thumbsDownImg[0].style.display == "block") {
        thumbsDownImg[1].style.display = "block";
        thumbsDownImg[0].style.display = "none";
        upvotes.textContent = `+${upvoteNum} upvotes`
    } 
});




// const
// $(elem).on('click', function() {
//     // add new buttons with share behaviour
//     $('#someDiv').append('<button class="twitter" data-title="Some button" data-url="somesite.com"></button>');
//     window.Sharer.init();
// })