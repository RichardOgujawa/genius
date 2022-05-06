console.clear();

var scroll = false; //Toggle to prevent it from re-animating everytime user scrolls

window.addEventListener("resize", ()=> {
    var windowWidthMobile = window.innerWidth;

if (windowWidthMobile <= 926 && navSearchWrap.style.transform == "translateY(-200%)") {
    //Mobile View
    navbar.style.clipPath = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)";

    navbar.style.transition = "var(--speed) ease"; 

    navLogoImg.style.transform="translateY(0%)";
    navSearchWrap.style.transform="translateY(0%)";   
    
    navbarWrapper.style.backgroundColor = "hsl(var(--clr-dark, 0 0% 0%))"; 
    
    navFiller.style.height = "100%";
    navFiller.style.boxShadow= "inset 0 -3px 0 hsl(var(--clr-dark, 0 0% 9%))";

    } else {

    }
});


/* On Scroll Animation*/
window.addEventListener("scroll", ()=> {
    var vertScroll = window.scrollY;
    var windowWidth = window.innerWidth;

    // console.log(windowWidth);    
    // console.log("scrollY:" + Math.floor(vertScroll));

    

    if (vertScroll > 1 
        && windowWidth > 926 
        && scroll==false){
        //Desktop View After Scroll
        scroll = true;

        navbar.style.transition = "0s";
        navbar.style.clipPath = "polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)";
        
        setTimeout(navbarAnimateIn, 275);
        
        function navbarAnimateIn() {
            navbar.style.transition = "var(--speed) ease"; 
            navbar.style.clipPath = "polygon(0% 0%, 0% 57%, 100% 57%, 100% 0%)";
        }


        // navbarWrapper.style.backgroundColor="transparent";
        
        // /*Fill Gap, and bring in */
        navFiller.style.height = "calc(130px*0.55 + 3px)";
        navFiller.style.boxShadow= "inset 0 -3px 0 hsl(var(--clr-accent, 60 100% 50%))";
        
        navLogoImg.style.transform="translateY(-160%)";
        navSearchWrap.style.transform="translateY(-200%)";
        
        
    } 
    else if (vertScroll <= 1 
        && windowWidth > 926 
        && scroll) {
        //Desktop View Before Scroll
        scroll = false; 

        // console.log("back to top");
       
        navbar.style.transition = "var(--speed) ease"; 
        navbar.style.clipPath = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)";


        navLogoImg.style.transform="translateY(0%)";
        navSearchWrap.style.transform="translateY(0%)";   
        
        navbarWrapper.style.backgroundColor = "hsl(var(--clr-dark, 0 0% 0%))"; 
        
        navFiller.style.height = "100%";
        navFiller.style.boxShadow= "inset 0 -3px 0 hsl(var(--clr-dark, 0 0% 9%))";

    }
    
    console.log(scroll);

})

//To select parent selectors you can't use CSS so use JS to do it. 

navSearchInput.addEventListener("focus", ()=> {
    navSearchWrap.style.border="2px solid hsl(var(--clr-white, 0 0% 100%))"
});

navSearchInput.addEventListener("blur", ()=> {
    navSearchWrap.style.border="2px solid hsl(var(--clr-accent, 60 100% 50%))"
});
