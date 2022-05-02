const cursor = document.getElementById("cursor");
const cursorInner = document.getElementById("cursor-inner")

function cursorMove(event) {

    //Check to see if the page has scrolled and add or minus that from the position, so that we get an accurate positiion
    window.addEventListener("scroll", ()=> {
        var windowY = window.scrollY;
        var windowX = window.scrollX;
    });


    //mouse position + windowScroll from above
    var x = event.clientX + window.scrollX;
    var y = event.clientY + window.scrollY;
    // console.log("X coords: " + x + ", Y coords: " + y);

    // update position of mouse
    cursor.style.top = `${y}px`;
    cursor.style.left = `${x}px`;

    cursorInner.style.top = `${y}px`;
    cursorInner.style.left = `${x}px`;
}



//When I  hover over specific elements let the cursor be made bigger

const cursorBiggers = document.querySelectorAll(".cursor_bigger");

cursorBiggers.forEach(cursorBigger => {
    cursorBigger.addEventListener("mouseenter", ()=> {
        cursor.style.width = "70px";
        cursorInner.style.width = "70px"; 
    });
})

cursorBiggers.forEach(cursorBigger => {
    cursorBigger.addEventListener("mouseleave", () => {
    cursor.style.width = "40px";
    cursorInner.style.width = "40px";
});
})
