const logo = document.getElementById("imgid");
const search = document.getElementById("search-container");

//HOW TO FIX THE ISSUE AT HAND - 1. Make the concentric circles a loading screen, and then 2. change the keyframes to simply javascript DOM manipulations and put it it a window.addEventListener("load", ()=> {}); 

window.addEventListener("scroll", ()=>{
    var vertScroll = window.scrollY;

    if (vertScroll >= 10) {
        logo.style.transform="translateY(-100%)";
        search.style.transform="translateY(-190%)";
    }
    else if (vertScroll < 10) {
        logo.style.transform="translateY(0%)";
        search.style.transform="translateY(0%)";

    }
});







