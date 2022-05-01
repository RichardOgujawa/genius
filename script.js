/*VARIABLES*/
//Navbar
const navbar  = document.getElementById("navbar");
const logo = document.getElementById("logo-img");
const search = document.getElementById("search");
const searchWrap = document.getElementById("search-wrap");
const navBtnsCont = document.getElementById("navbar-buttons");
const socialLinkCont = document.getElementById("social-link-container");
const navLinkCont = document.getElementById("nav-link-container"); 
const logoCont = document.getElementById("logo-container");

const navLinks = document.querySelectorAll(".nav_link");
const socialLinks = document.querySelectorAll(".social_link");
const navbarButtons = document.querySelectorAll(".navbar_buttons");

//Hero 
const hero = document.getElementById("hero");
const heroImg = document.getElementById("hero-img");
const songMeaning = document.getElementById("song-meaning");

//Mobile Hamburger 
const mobileHamburger = document.getElementById("mobile-hamburger");
const mobileNav = document.getElementById("mobile-nav");

//Hamburger 
const hamburgerCont = document.getElementById("hamburger-container");
const hamburger = document.getElementById("hamburger");

const hamburgerSpan = document.querySelectorAll(".hamburger_span");
// const lyricGuide = document.getElementById("lyric-guide");
// const mobileHamburgerSpan = document.querySelectorAll(".mobile_hamburger_span");

// const bgLogoText = document.getElementById("bg-logo-text");
// const bgLogo = document.getElementById("bg-logo");

// Logo and Search Animation on scroll

window.addEventListener("scroll", ()=>{
    var vertScroll = window.scrollY;
    var windowWidth = window.innerWidth;
    console.log(windowWidth);
    
    var searchWrapTransform = searchWrap.style.transform;

    if (windowWidth < 1190 && searchWrapTransform == "translateY(-200%)") {
        logo.style.transform = "translateY(0%)";
        searchWrap.style.transform = "translateY(0%)";
    }
    else if (vertScroll >= 100 && windowWidth >= 1190) {
        logo.style.transform="translateY(-150%)";
        searchWrap.style.transform="translateY(-200%)";
        songMeaning.style.transform = "translateY(0%)";
        heroImg.style.width = "81%";
    }
    else if (vertScroll < 100 && windowWidth >= 1190) {
        logo.style.transform="translateY(0%)";
        searchWrap.style.transform="translateY(0%)";    
        heroImg.style.width = "60%";
        
    } else if (vertScroll >= 100){
        heroImg.style.width = "81%";
        songMeaning.style.transform = "translateY(0%)";

    }

});

//Cloning for Featured Section

const node = document.getElementById("row2");
// const clone = node.cloneNode(true);
const featuredGrid = document.getElementById("featured-grid");

const loadMoreButton = document.getElementById("load-more-button");

    function myFunction(){

        featuredGrid.appendChild(node.cloneNode(true));
    }



    















// function navbarScroll() {
//     logo.style.transform="translateY(0%)";
//     searchWrap.style.transform="translateY(0%)";
// }




//This is the loading animation for elements that aren't in both mobile and desktop view. To prevent them from re-animating every time the window is resized.

function loadingItems() {
    //Animations with Delays

    //*Menu
    //**Desktop
    // setTimeout(logoAnim, 200);

    setTimeout(navLinksAnim, 225);
    
    setTimeout(socialLinksAnim,275);

    setTimeout(navBarButtonsAnim, 325);

    //**Mobile 
    setTimeout(hamburgerIcon, 275);

    // //*Header
    // setTimeout(lyricGuideAnim,300);

    // //*Hero Image 
    // setTimeout(heroImgAnim, 400);

    // /*Genius text*/
    // setTimeout(bglogoTextAnim, 250);

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

// function bglogoTextAnim(){
//     bgLogoText.style.display = "none";
// }

// //Hero Img Animation 
// function heroImgAnim(){
//     heroImg.style.transform = "translate(0%)";
// }
// //Lyric Guide Animation
// function lyricGuideAnim(){
//     lyricGuide.style.transform = "translate(0%)";
// }


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
        mobileNav.style.transform = "translateX(0%)";
    } 
});


mobileHamburger.addEventListener("click", () => {

    if (toggleClick == false) {
        toggleClick = !toggleClick;
        mobileNav.style.transform = "translateX(100%)";
    }
});


