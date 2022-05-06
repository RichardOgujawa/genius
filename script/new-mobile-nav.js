console.clear();

/* Mobile Menu slide in & out */
navHamburgerWrapper.addEventListener("click", ()=> {
    mobileNavContainer.style.transform = "translateX(0%)";
});

mobileNavHamburgerWrapper.addEventListener("click", ()=> {
    mobileNavContainer.style.transform = "translateX(100%)";
});

window.addEventListener("resize", ()=>{
    var windowWidthMobile = window.innerWidth;
    console.log(windowWidthMobile)
    if (mobileNavContainer.style.transform == "translateX(0%)" && windowWidthMobile > 926) {
        mobileNavContainer.style.transform = "translateX(100%)";
    }
    else {
        console.log("Not Yet");
    }
});

