
/*Menu Animation on Scroll*/
window.addEventListener("scroll", ()=>{
    var vertScroll = window.scrollY;
    var windowWidth = window.innerWidth;
    console.log(windowWidth);
    
    var searchWrapTransform = searchWrap.style.transform;
    
    if (windowWidth < 1190 && searchWrapTransform == "translateY(-200%)") {
        logo.style.transform = "translateY(0%)";
        searchWrap.style.transform = "translateY(0%)";

        fillgap1.style.gridArea = "1/1/4/1";
        fillgap1.style.boxShadow="0px 0px 0px transparent";
        fillgap2.style.gridArea = "1/4/4/4";
        fillgap2.style.boxShadow="0px 0px 0px transparent";
        fillgap3.style.background = "transparent";

        searchCont.style.background = "transparent";
        
    }
    else if (vertScroll >= 100 && windowWidth >= 1190) {
        logo.style.transform="translateY(-150%)";
        searchWrap.style.transform="translateY(-200%)";

        fillgap1.style.gridArea = "1/1/2/1";
        fillgap1.style.boxShadow="0px 3px 0px var(--yellow, red)";
        fillgap2.style.gridArea = "1/6/2/6";
        fillgap2.style.boxShadow="0px 3px 0px var(--yellow, red)";
        fillgap3.style.background = "transparent";
        
        searchCont.style.background = "transparent";
    } 
    else if (vertScroll < 100 && windowWidth >= 1190) {
        logo.style.transform="translateY(0%)";
        searchWrap.style.transform="translateY(0%)";   
        
        fillgap1.style.gridArea = "1/1/4/1";
        fillgap1.style.boxShadow="0px 0px 0px transparent";
        fillgap2.style.gridArea = "1/6/4/6";
        fillgap2.style.boxShadow="0px 0px 0px transparent";
        fillgap3.style.background = "var(--dark-gray, red)";
        
        searchCont.style.background = "var(--dark-gray, red)";
    }
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