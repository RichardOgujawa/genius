
//Cloning for Featured Section

const node = document.getElementById("row2");
// const clone = node.cloneNode(true);
const featuredGrid = document.getElementById("featured-grid");

const loadMoreButton = document.getElementById("load-more-button");

    function myFunction(){

        featuredGrid.appendChild(node.cloneNode(true));
    }

    const mobileMenuItems = document.querySelectorAll(".mobile_nav_link");
    const mobileNavlinkSpan = document.querySelectorAll(".mobile_nav_link_span");
    
    