
window.addEventListener("load", ()=> {
    preloadFunc();
});

function preloadFunc(){
    setTimeout(doneLoading,  3500);
}

//Loading Pages
function doneLoading(){
    grid.style.display = "grid";
    preload.style.display = "none";
    setTimeout(loadPage, 500);
}

function loadPage(){
    //Animations with Delays

    //*Menu
    //**Desktop
    setTimeout(searchAnim, 500);
    setTimeout(logoAnim, 500);
    setTimeout(navBarHrAnim, 500);

    setTimeout(navLinksAnim, 600);
    
    setTimeout(socialLinksAnim, 700);

    setTimeout(navBarButtonsAnim, 800);

    //**Mobile 
    setTimeout(hamburgerIconAnim, 700);

    // //*Hero
    setTimeout(lyricGuideAnim,800);

    //*Hero Image 
    setTimeout(heroImgAnim, 750);

    // /*Genius text*/
    // setTimeout(bglogoTextAnim, 250);

    // setTimeout(backgroundColorChange, 600);
}

//Search Animation

function searchAnim(){
    searchWrap.style.opacity = "1";
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

//Navbar Hr 
function navBarHrAnim(){
    navbarHr.style.width = "100%";
}

//Hamburger Icon Animation
function hamburgerIconAnim(){
    for(i=0; i<hamburgerSpan.length; i++){
        hamburgerSpan[i].style.transform = "translateX(0%)";
    }
}

//Lyric Guide Animation
function lyricGuideAnim(){
    lyricGuide.style.transform = "translate(0%)";
}

//Hero Img Animation 
function heroImgAnim(){
    heroImg.style.transform = "translate(0%)";
}




