/*Adding Images to background for featured section*/
for (i = 0; i < 4; i++) {
    console.log(featuredData[i].image)
    featuredTitle[i].textContent = `${featuredData[i].title}`;
    featuredImg[i].style.backgroundImage = `url(${featuredData[i].image})`;
    featuredDate[i].textContent = `${featuredData[i].date}`
    featuredAuthor[i].textContent = `${featuredData[i].author}`
    featuredLink[i].setAttribute("href", `${featuredData[i].href}`);
    featuredLink[i].innerText = "See the article";
}

/*Load more content*/
loadMoreButton.addEventListener("click", () => {
    clickCount++;
    //This will give cell1 a value, and cell2 the value after it starting from the 5th element 
    var i = 2 + clickCount * 2;
    var i1 = i + 1;


    //This will only run the function is there are articles to display
    if (i < featuredData.length - 1) {
        loadMoreButtonText.style.display = "none";
        loadingCircle.style.display = "inline-block";

        setTimeout(load, 1000);

        function load() {

            /*Section*/
            const createSection = document.createElement("section");
            createSection.setAttribute("class", "flex featured_news_row");

            /*Cell*/
            const createCell = document.createElement("div");
            createCell.setAttribute("class", "featured_cell");

            //
            const createCell1 = document.createElement("div");
            createCell1.setAttribute("class", "featured_cell");

            /*Top Row*/
            const createTopRow = document.createElement("div");
            createTopRow.setAttribute("class", "flex top_row");
            createCell.appendChild(createTopRow);

            //
            const createTopRow1 = document.createElement("div");
            createTopRow1.setAttribute("class", "flex top_row");
            createCell1.appendChild(createTopRow1);

            /*Featured Title*/
            const createFeaturedTitle = document.createElement("span");
            createFeaturedTitle.innerText = `${featuredData[i].title}`;
            createFeaturedTitle.setAttribute("class", "capitalize featured_title");
            createTopRow.appendChild(createFeaturedTitle);

            //
            const createFeaturedTitle1 = document.createElement("span");
            createFeaturedTitle1.innerText = `${featuredData[i1].title}`;
            createFeaturedTitle1.setAttribute("class", "capitalize featured_title");
            createTopRow1.appendChild(createFeaturedTitle1);

            /*Featured Date*/
            const createFeaturedDate = document.createElement("span");
            createFeaturedDate.innerText = `${featuredData[i].date}`;
            createFeaturedDate.setAttribute("class", "featured_date");
            createTopRow.appendChild(createFeaturedDate);

            //
            const createFeaturedDate1 = document.createElement("span");
            createFeaturedDate1.innerText = `${featuredData[i1].date}`;
            createFeaturedDate1.setAttribute("class", "featured_date");
            createTopRow1.appendChild(createFeaturedDate1);

            /*Featured Img*/
            const createImg = document.createElement("div");
            createImg.style.backgroundImage = `url(${featuredData[i].image})`;
            createImg.setAttribute("class", "flex cursor_bigger featured_cell_img_container");
            createCell.appendChild(createImg);

            //
            const createImg1 = document.createElement("div");
            createImg1.setAttribute("class", "flex cursor_bigger featured_cell_img_container");
            createImg1.style.backgroundImage = `url(${featuredData[i1].image})`;
            createCell1.appendChild(createImg1);

            /*Featured Bottom Row*/
            const createBottomRow = document.createElement("div");
            createBottomRow.setAttribute("class", "bottom_row");
            createCell.appendChild(createBottomRow);

            //
            const createBottomRow1 = document.createElement("div");
            createBottomRow1.setAttribute("class", "bottom_row");
            createCell1.appendChild(createBottomRow1);

            /*Featured Author*/
            const createFeaturedAuthor = document.createElement("span");
            createFeaturedAuthor.innerText = `${featuredData[i].author}`;
            createFeaturedAuthor.setAttribute("class", "featured_author");
            createBottomRow.appendChild(createFeaturedAuthor);

            //
            const createFeaturedAuthor1 = document.createElement("span");
            createFeaturedAuthor1.innerText = `${featuredData[i1].author}`;
            createFeaturedAuthor1.setAttribute("class", "featured_author");
            createBottomRow1.appendChild(createFeaturedAuthor1);

            /*Featured Links Container*/
            const createFeaturedLinksContainer = document.createElement("div");
            createFeaturedLinksContainer.setAttribute("class", "featured_links_container");
            createBottomRow.appendChild(createFeaturedLinksContainer);

            //
            const createFeaturedLinksContainer1 = document.createElement("div");
            createFeaturedLinksContainer1.setAttribute("class", "featured_links_container");
            createBottomRow1.appendChild(createFeaturedLinksContainer1);



            /*Featured Link*/
            const createFeaturedLink = document.createElement("a");
            createFeaturedLink.setAttribute("class", "text-white featured_link");
            createFeaturedLink.innerText = `See the article`;
            createFeaturedLink.setAttribute("href", `${featuredData[i].href}`);
            createFeaturedLinksContainer.appendChild(createFeaturedLink);

            //
            const createFeaturedLink1 = document.createElement("a");
            createFeaturedLink1.setAttribute("class", "text-white featured_link");
            createFeaturedLink1.innerText = `See the article`;
            createFeaturedLink1.setAttribute("href", `${featuredData[i1].href}`);
            createFeaturedLinksContainer1.appendChild(createFeaturedLink1);

            createSection.append(createCell, createCell1);
            featuredNewsGrid.append(createSection);


            i++;

            const cursorBiggers = document.querySelectorAll(".cursor_bigger");

            cursorBiggers.forEach(cursorBigger => {
                cursorBigger.addEventListener("mouseenter", () => {
                    cursorOuter.style.width = "70px";
                    cursorInner.style.width = "70px";
                });
            })

            cursorBiggers.forEach(cursorBigger => {
                cursorBigger.addEventListener("mouseleave", () => {
                    cursorOuter.style.width = "40px";
                    cursorInner.style.width = "40px";
                });
            })


            loadMoreButtonText.style.display = "inline-block";
            loadingCircle.style.display = "none";
        }
    }
});



