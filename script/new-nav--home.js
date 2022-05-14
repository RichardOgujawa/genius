var scroll = false; //Toggle to prevent it from re-animating everytime user scrolls

window.addEventListener("resize", () => {
    var windowWidthMobile = window.innerWidth;
    var windowHeight = window.innerHeight;


    if (windowWidthMobile <= 926 && navSearchWrap.style.transform == "translateY(-180%)") {
        //Mobile View
        navbar.style.clipPath = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)";

        navbar.style.transition = "var(--speed) ease";

        navLogoImg.style.transform = "translateY(0%)";
        navSearchWrap.style.transform = "translateY(0%)";

        navbarWrapper.style.backgroundColor = "hsl(var(--clr-dark, 0 0% 0%))";

        navFiller.style.height = "100%";
        navFiller.style.boxShadow = "inset 0 -3px 0 hsl(var(--clr-dark, 0 0% 9%))";

    } else {

    }
});


/* On Scroll Animation*/
window.addEventListener("scroll", () => {
    var vertScroll = window.scrollY;
    var windowWidth = window.innerWidth;

    if (vertScroll > 1
        && windowWidth > 926
        && scroll == false) {
        //Desktop View After Scroll
        scroll = true;

        navbar.style.transition = "0s";
        navbar.style.clipPath = "polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)";

        setTimeout(navbarAnimateIn, 275);

        function navbarAnimateIn() {
            navbar.style.transition = "var(--speed) ease";
            navbar.style.clipPath = "polygon(0% 0%, 0% 57%, 100% 57%, 100% 0%)";
        }



        // /*Fill Gap, and bring in yellow border */
        navFiller.style.height = "calc(130px*0.55 + 3px)";
        navFiller.style.boxShadow = "inset 0 -3px 0 hsl(var(--clr-accent, 60 100% 50%))";

        navLogoImg.style.transform = "translateY(-160%)";
        navSearchWrap.style.transform = "translateY(-180%)";

        navLogoImg.tabIndex = -1;
        navSearchInput.tabIndex = 1;


    }
    else if (vertScroll <= 1
        && windowWidth > 926
        && scroll) {
        //Desktop View Before Scroll
        scroll = false;

        navbar.style.transition = "var(--speed) ease";
        navbar.style.clipPath = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)";


        navLogoImg.style.transform = "translateY(0%)";
        navSearchWrap.style.transform = "translateY(0%)";
        navSearchInput.tabIndex = 0;
        navLogoImg.tabIndex = 1;


        navbarWrapper.style.backgroundColor = "hsl(var(--clr-dark, 0 0% 0%))";

        navFiller.style.height = "100%";
        navFiller.style.boxShadow = "inset 0 -3px 0 hsl(var(--clr-dark, 0 0% 9%))";

    }


})


//To select parent selectors you can't use CSS so use JS to do it. So this bit of code is used to animate the search on focus/blur

navSearchInput.addEventListener("focus", () => {
    navSearchWrap.style.border = "2px solid hsl(var(--clr-white, 0 0% 100%))"
});

navSearchInput.addEventListener("blur", () => {
    navSearchWrap.style.border = "2px solid hsl(var(--clr-accent, 60 100% 50%))"
});

