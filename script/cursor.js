function cursorMove(event) {

    //Check to see if the page has scrolled and add or minus that from the position, so that we get an accurate positiion
    window.addEventListener("scroll", () => {
        var windowY = window.scrollY;
        var windowX = window.scrollX;
    });


    //mouse position + windowScroll from above
    var x = event.clientX + window.scrollX;
    var y = event.clientY + window.scrollY;
    // console.log("X coords: " + x + ", Y coords: " + y);

    // update position of mouse
    cursorOuter.style.top = `${y}px`;
    cursorOuter.style.left = `${x}px`;

    cursorInner.style.top = `${y}px`;
    cursorInner.style.left = `${x}px`;
}



//When I  hover over specific elements let the cursor be made bigger

const cursorBiggers = document.querySelectorAll(".cursor_bigger");

cursorBiggers.forEach(cursorBigger => {
    cursorBigger.addEventListener("mouseenter", () => {
        cursorOuter.style.width = "70px";
        cursorInner.style.width = "70px";
    });
    
    cursorBigger.addEventListener("mouseleave", () => {
        cursorOuter.style.width = "40px";
        cursorInner.style.width = "40px";
    });
})

const highlights = document.querySelectorAll(".highlight");
const cursorText = document.querySelector('#cursor-text');

highlights.forEach(highlight => {
    highlight.addEventListener("mouseenter", () => {
        cursorOuter.style.width = "74px";

        cursorText.style.opacity = "1";
        
        cursorInner.style.width = "72px";
        cursorInner.style.backgroundColor = "hsl(var(--clr-dark, 0 0% 9%), 0.5)";
        cursorInner.style.mixBlendMode = "normal";
        //This effect doesn't work on Firefox, it's not supported
        // if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            cursorInner.style.backdropFilter = "blur(3px)";
        })
        
        highlight.addEventListener("mouseleave", () => {
            cursorOuter.style.width = "40px";
            
            cursorText.style.opacity = "0";
            
            cursorInner.style.width = "40px";
            cursorInner.style.backgroundColor = "hsl(var(--clr-accent, 60 100% 50%))";
        cursorInner.style.mixBlendMode = "difference";
        cursorInner.style.backdropFilter = "blur(0px)";
    })
})


