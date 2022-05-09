/*-----------------------*/
/* Body                  */
/*-----------------------*/

const bodyGridWrap = document.getElementById("body-grid-wrap");

/*-----------------------*/
/* Navigation            */
/*-----------------------*/

/*Navbar*/
const navbar = document.getElementById("navbar");
const navbarWrapper = document.getElementById("navbar-wrapper");

/*Nav Filler*/
const navFiller = document.getElementById("nav-filler");


/*Nav Logo*/
const navLogoImg = document.getElementById("nav-logo-img");
const navSearchContainer = document.getElementById("nav-search-container");

/*Nav Hamburger*/
const navHamburgerWrapper = document.getElementById("nav-hamburger-wrapper");

/*Nav Search*/
const navSearchWrap = document.getElementById("nav-search-wrap");
const navSearchInput = document.getElementById("nav-search");

/*Mobile Nav Container*/
const mobileNavContainer = document.getElementById("mobile-nav-container");

/*Mobile Hamburger*/
const mobileNavToggle = document.querySelectorAll(".mobile-nav-toggle");


/*-----------------------*/
/* Cursor                */
/*-----------------------*/

const cursorOuter = document.getElementById("cursor-outer");
const cursorInner = document.getElementById("cursor-inner");

/*-----------------------*/
/* Featured News         */
/*-----------------------*/

const featuredNewsGrid = document.getElementById("featured-news-grid");
const featuredTitle = document.querySelectorAll(".featured_title");
const featuredDate = document.querySelectorAll(".featured_date");
const featuredImg = document.querySelectorAll(".featured_cell_img_container");
const featuredAuthor = document.querySelectorAll(".featured_author");
const featuredLink = document.querySelectorAll(".featured_link")


const loadMoreButton = document.getElementById("load-more-button");
const loadMoreButtonText = document.getElementById("load-more-button-text");
const loadingCircle = document.getElementById("loading-circle");

var clickCount = 0;


const featuredDataJson = JSON.stringify(
    [
        {
            "title": "Radio Personality Laura Stylez Talks Balancing Motherhood And Her Career",
            "date": "May 6, 2022",
            "image": "images/laura-stylez.jpg",
            "author": "Leah Degrazia",
            "href": "https://genius.com/a/radio-personality-laura-stylez-talks-balancing-motherhood-and-her-career"
        },

        {
            "title": "A$AP Rocky Professes His Love For Rihanna In New Song “D.M.B.”",
            "date": "May 6, 2022",
            "image": "images/a-ghetto-love-tale-asap-rocky.jpg",
            "author": "Ken Partidge",
            "href": "https://genius.com/a/a-ap-rocky-professes-his-love-for-rihanna-in-new-song-d-m-b"
        },

        {
            "title": "Read All The Lyrics To Bad Bunny’s New Album ‘Un Verano Sin Ti’",
            "date": "May 6, 2022",
            "image": "images/el-ultimo-tour-del-mundo-bad-baby.jpg ",
            "author": "Leah Degrazia",
            "href": "https://genius.com/a/read-all-the-lyrics-to-bad-bunnys-new-album-un-verano-sin-ti"
        },

        {
            "title": "Read All The Lyrics To Arcade Fire’s New Album ‘WE’",
            "date": "May 6, 2022",
            "image": "images/we-arcade-fire.jpg",
            "author": "Ken Partridge",
            "href": "https://genius.com/a/read-all-the-lyrics-to-arcade-fires-new-album-we"
        },

        {
            "title": "Read All The Lyrics To Jack Harlow’s New Album ‘Come Home The Kids Miss You’",
            "date": "May 6, 2022",
            "image": "images/come-home-the-kids-miss-you-jack-harlow.jpg",
            "author": "Leah Degrazia",
            "href": "https://genius.com/a/read-all-the-lyrics-to-jack-harlows-new-album-come-home-the-kids-miss-you"
        },

        {
            "title": "Tove Lo Struggles To Survive Heartbreak On New Song “No One Dies From Love”",
            "date": "May 5th, 2022",
            "image": "images/no-one-dies-from-love-tove-lo.jpg",
            "author": "Leah Degrazia",
            "href": "https://genius.com/a/tove-lo-struggles-to-survive-heartbreak-on-new-song-no-one-dies-from-love"
        },

        {
            "title": "Chase Atlantic Suffer Dark Times On New Song “COLD NIGHTS”",
            "date": "May 4th, 2022",
            "image": "images/beauty-in-death-chase-atlantic.jpg",
            "author": "Ken Partridge",
            "href": "https://genius.com/a/chase-atlantic-suffer-dark-times-on-new-song-cold-nights"
        },

        {
            "title": "Lady Gaga Provides Comfort During Difficult Times On New Song “Hold My Hand”",
            "date": "May 3, 2022",
            "image": "images/hold-my-hand-lady-gaga.jpg",
            "author": "Leah Degrazia",
            "href": "https://genius.com/a/lady-gaga-provides-comfort-during-difficult-times-on-new-song-hold-my-hand"

        },

        {
            "title": "Genius Community Playlist April 2022 ",
            "date": "April 30th, 2022",
            "image": "images/genius-community-playlist.gif",
            "author": "streetlights",
            "href": "https://genius.com/a/genius-community-playlist-april-2022"
        },

        {
            "title": "Justin Bieber Links With Don Toliver On New Song “Honest”",
            "date": "April 29th, 2022",
            "image": "images/honest-justin-bieber-don-toliver.jpg",
            "author": "Leah Degrazia",
            "href": "https://genius.com/a/justin-bieber-links-with-don-toliver-on-new-song-honest"
        },
        {
            "title": "Read All The Lyrics To Future’s New Album ‘I NEVER LIKED YOU’",
            "date": "April 29th, 2022",
            "image": "images/i-never-liked-you-future.jpg",
            "author": "Ken Partridge",
            "href": "https://genius.com/a/read-all-the-lyrics-to-futures-new-album-i-never-liked-you"
        },

        {
            "title": "Read All The Lyrics To Toro y Moi’s New Album ‘MAHAL’",
            "date": "April 29th, 2022",
            "image": "images/mahal-chaz-bear.jpg",
            "author": "Ken Partridge",
            "href": "https://genius.com/a/read-all-the-lyrics-to-toro-y-mois-new-album-mahal"
        }

    ])
    ;

const featuredData = JSON.parse(featuredDataJson);




