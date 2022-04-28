const logo = document.getElementById("img-id");
const hero = document.getElementById("hero");
const bgLogo = document.getElementById("bg-logo");
const lyricGuide = document.getElementById("lyric-guide");
const heroImg = document.getElementById("hero-img");
const songMeaning = document.getElementById("song-meaning");
const mobileNav = document.getElementById("mobile-nav");
const hamburger = document.getElementById("hamburger");
const mobileHamburger = document.getElementById("mobile-hamburger");
const search = document.getElementById("search-container");
const hamburgerCont = document.getElementById("hamburger-container");
const navBtnsCont = document.getElementById("navbar-buttons");
const socialLinkCont = document.getElementById("social-link-container");
const navLinkCont = document.getElementById("nav-link-container"); 
const logoCont = document.getElementById("logo");
const bgLogoText = document.getElementById("bg-logo-text");

const navLinks = document.querySelectorAll(".nav_link");
const socialLinks = document.querySelectorAll(".social_link");
const navbarButtons = document.querySelectorAll(".navbar_buttons");
const hamburgerSpan = document.querySelectorAll(".hamburger_span");
const mobileHamburgerSpan = document.querySelectorAll(".mobile_hamburger_span");





// Logo and Search Animation on scroll

window.addEventListener("scroll", ()=>{
    var vertScroll = window.scrollY;

    if (vertScroll >= 10 && heroImg.style.transform == "translate(0%)") {
        logo.style.transform="translateY(-100%)";
        search.style.transform="translateY(-190%)";
        songMeaning.style.transform="translateY(0%)";
    }
    else if (vertScroll < 10) {
        logo.style.transform="translateY(0%)";
        search.style.transform="translateY(0%)";
    }
}), 3000   


function preloadFunc(){
    setTimeout(loadingItems,  3000);
}

//This is the loading animation for elements that aren't in both mobile and desktop view. To prevent them from re-animating every time the window is resized.

function loadingItems() {
    //Animations with Delays

    //*Menu
    //**Desktop
    setTimeout(logoAnim, 200);

    setTimeout(navLinksAnim, 225);
    
    setTimeout(socialLinksAnim,275);

    setTimeout(navBarButtonsAnim, 325);

    //**Mobile 
    setTimeout(hamburgerIcon, 275);

    //*Header
    setTimeout(lyricGuideAnim,300);

    //*Hero Image 
    setTimeout(heroImgAnim, 400);

    /*Genius text*/
    setTimeout(bglogoTextAnim, 250);

    setTimeout(backgroundColorChange, 400);
}

function backgroundColorChange(){
    // navBtnsCont.style.background = "rgb(225,0,0)";
    // hamburgerCont = document.getElementById("hamburger-container");
    // navbarCont = document.getElementById("navbar-buttons");
    // socialLinkCont = document.getElementById("social-link-container");
    // navLinkCont = document.getElementById("nav-link-container"); 
    // logoCont
}

function bglogoTextAnim(){
    bgLogoText.style.display = "none";
}

//Hero Img Animation 
function heroImgAnim(){
    heroImg.style.transform = "translate(0%)";
}
//Lyric Guide Animation
function lyricGuideAnim(){
    lyricGuide.style.transform = "translate(0%)";
}


//Logo Animation
function logoAnim(){
    logo.style.transform = "translateY(0%)";

}

//NavLinks Animation
function navLinksAnim(){

    for(i=0; i<navLinks.length; i++){
    navLinks[i].style.transform = "translateY(0%)";
    }
}

//Social Links Animation
function socialLinksAnim() {

    for(i=0; i<socialLinks.length; i++){
        socialLinks[i].style.transform = "translateY(0%)";
    }
}

//Navbar Buttons Animation
function navBarButtonsAnim(){
    for(i=0; i<navbarButtons.length; i++){
        navbarButtons[i].style.transform = "translateY(0%)";
    }
}

//Hamburger Icon Animation
function hamburgerIcon(){
    for(i=0; i<hamburgerSpan.length; i++){
        hamburgerSpan[i].style.transform = "translateY(0%)";
    }
}

/*Mobile Nav Scroll*/
var toggleClick = true;

hamburger.addEventListener("click", () => {
    
    if (toggleClick == true) {
        toggleClick = !toggleClick;
        mobileNav.style.transform = "translateX(-100%)";

    } else if (toggleClick == false) {
        toggleClick = !toggleClick;
        mobileNav.style.transform = "translateX(0%)";

    }
});

mobileHamburger.addEventListener("click", () => {
    
    if (toggleClick == true) {
        toggleClick = !toggleClick;
        mobileNav.style.transform = "translateX(-100%)";

    } else if (toggleClick == false) {
        toggleClick = !toggleClick;
        mobileNav.style.transform = "translateX(0%)";

    }
});

