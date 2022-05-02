/*VARIABLES*/
//Navbar
const navbar  = document.getElementById("navbar");
const logo = document.getElementById("logo-img");
const search = document.getElementById("search");
const searchWrap = document.getElementById("search-wrap");
const navBtnsCont = document.getElementById("navbar-buttons-container");
const socialLinkCont = document.getElementById("social-link-container");
const navLinkCont = document.getElementById("nav-link-container"); 
const logoCont = document.getElementById("logo-container");
const navbarHr = document.getElementById("navbar-hr");

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
const hamburgerSpan = document.querySelectorAll(".hamburger_span");
const mobileHamburgerSpan = document.querySelectorAll(".mobile_hamburger_span");

//Hamburger 
const hamburgerCont = document.getElementById("hamburger-container");
const hamburger = document.getElementById("hamburger");
const lyricGuide = document.getElementById("lyric-guide");

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

    const mobileMenuItems = document.querySelectorAll(".mobile_nav_link");
    const mobileNavlinkSpan = document.querySelectorAll(".mobile_nav_link_span");
    
    
    //This animates a clipping path to show and hide the mobile menu items on hover
    mobileMenuItems.forEach(item => {
        item.addEventListener("mouseenter", ()=> {
            mobileNavlinkSpan[1].style.clipPath = "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)";
        });
        item.addEventListener("mouseleave", ()=> {
            mobileNavlinkSpan[1].style.clipPath = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)";
        });
               
    });



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


