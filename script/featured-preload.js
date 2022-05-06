function preloadFunc(){
    setTimeout(loadPage,  500);
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

    //*H1
    
    // //**H1Two and H1Three
    // setTimeout(h1TwoThreeAnim, 900);

    // //**H1One
    // setTimeout(h1OneAnim, 925);

    // //*H1Four 
    // setTimeout(h1FourAnim, 950);
    

    

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


/*FEATURED PAGE ONLY*/
//H1One
// function h1OneAnim(){
//     h1One.style.transform = "translateX(0%) rotateY(0deg)";
//     h1One.style.clipPath = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)";
// }

// function h1TwoThreeAnim(){
//     h1Two.style.transform = "translateY(0%)";
//     h1Two.style.clipPath = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)";
    
//     h1Three.style.transform = "translateY(0%)";
//     h1Three.style.clipPath = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)";
// }

// function h1FourAnim(){
//     h1Four.style.transform = "translateX(0%) rotateY(0deg)";
//     h1Four.style.clipPath = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)";
// }