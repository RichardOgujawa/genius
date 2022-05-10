/* On Scroll Animation*/
window.addEventListener("scroll", () => {
    var vertScroll = window.scrollY;
    var windowWidth = window.innerWidth;

    console.log(windowWidth);
    console.log("scrollY:" + Math.floor(vertScroll));



    if (windowWidth <= 926 && navSearchWrap.style.transform == "translateY(-200%)") {
        //Mobile View
        navLogoImg.style.transform = "translateY(0%)";
        navSearchWrap.style.transform = "translateY(0%)";

        navSearchContainer.style.backgroundColor = "transparent";

    }
    else if (vertScroll >= 100 && windowWidth > 926) {
        //Desktop View After Scroll
        navbarWrapper.style.backgroundColor = "transparent";

        /*Fill Gap, and bring in */
        navFiller.style.height = "calc(130px*0.55 + 3px)";
        navFiller.style.boxShadow = "inset 0 -3px 0 hsl(var(--clr-accent, 60 100% 50%))";

        navLogoImg.style.transform = "translateY(-160%)";
        navSearchWrap.style.transform = "translateY(-200%)";


    }
    else if (vertScroll < 100 && windowWidth > 926) {
        //Desktop View Before Scroll
        navLogoImg.style.transform = "translateY(0%)";
        navSearchWrap.style.transform = "translateY(0%)";

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


