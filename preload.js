var preload = document.getElementById("preload");
var grid = document.getElementById("grid");

function preloadFunc(){
    setTimeout(doneLoading,  3500);
}

function doneLoading(){
    grid.style.display = "grid";
    preload.style.display = "none";
}