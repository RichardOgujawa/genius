console.log(mobileNavToggle);
console.log(mobileNavContainer);

mobileNavToggle[0].addEventListener("click", () => {
    mobileNavContainer.style.transform = "translateX(0%)"
})

mobileNavToggle[1].addEventListener("click", () => {
    mobileNavContainer.style.transform = "translateX(100%)"
})

//Reset Mobile Nav Container position if the page is resized to desktop layout

window.addEventListener("resize", () => {
    var windowWidthMobile = window.innerWidth;
    console.log(windowWidthMobile)
    if (mobileNavContainer.style.transform == "translateX(0%)" && windowWidthMobile > 1024) {
        mobileNavContainer.style.transform = "translateX(100%)";
    }
    else {
        console.log("Not Yet");
    }
});


