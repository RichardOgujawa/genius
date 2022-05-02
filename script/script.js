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





