/*-----------------------*/
/* Body                  */
/*-----------------------*/

const bodyGridWrap = document.getElementById('body-grid-wrap');

/*-----------------------*/
/* Navigation            */
/*-----------------------*/

/*Navbar*/
const navbar = document.getElementById('navbar');
const navbarWrapper = document.getElementById('navbar-wrapper');

/*Nav Filler*/
const navFiller = document.getElementById('nav-filler');

/*Nav Logo*/
const navLogoImg = document.getElementById('nav-logo-img');
const navSearchContainer = document.getElementById('nav-search-container');

/*Nav Hamburger*/
const navHamburgerWrapper = document.getElementById('nav-hamburger-wrapper');

/*Nav Search*/
const navSearchWrap = document.getElementById('nav-search-wrap');
const navSearchInput = document.getElementById('nav-search');

/*Mobile Nav Container*/
const mobileNavContainer = document.getElementById('mobile-nav-container');

/*Mobile Hamburger*/
const mobileNavToggle = document.querySelectorAll('.mobile-nav-toggle');

/*-----------------------*/
/* Cursor                */
/*-----------------------*/
const cursorOuter = document.querySelector('.cursor_outer');
const cursorInner = document.querySelector('.cursor_inner');

const cursorBiggers = document.querySelectorAll('.cursor-bigger');

const cursorText = document.querySelector('.cursor_text');
const cursorPress = document.querySelector('.cursor_press');
const cursorDrag = document.querySelector('.cursor_drag');

/*-----------------------*/
/* Share                 */
/*-----------------------*/
const thumbsUpBtn = document.querySelector('.thumbs_up_button');

const thumbsDownBtn = document.querySelector('.thumbs_down_button');

const upvotes = document.querySelector('.upvotes');
var upvoteNum = 9;

/*-----------------------------*/
/* Lyrics Analysis Component   */
/*-----------------------------*/
const highlights = document.querySelectorAll('.highlights');

const annotationJSON = JSON.stringify([
	{
		highlightText:
			"Black and Samoan in my veins, my culture bangin' with Strange",

		annotationDetails:
			'In this line, Dwayne explains his mixed ancestry. His father, former professional wrestler <a href="https://www.wwe.com/superstars/rockyjohnson">Rocky Johnson</a>, was Black, while his mother Ata Johnson, is Samoan. His adopted maternal grandfather Peter Maivia was also a pro wrestler, making him an honorary member of the Anoa\' i Samoan wrestling family. Johnson’s original ring name was Rocky Maivia, an homage to both his father and grandfather.',

		annotationSrc: './images/peter-rocky-rock.jpg',

		annotationFigcaption:
			'Pictured left to right: Peter Maivia, Rocky Johnson, and Dwayne “The Rock” Johnson.',

		annotationUpvoteNum: '+68',
	},
	{
		highlightText:
			"Face to face now we escalatin' when I have to put boots to asses",

		annotationDetails: `Dwayne "The Rock" Johnson's first verse is written as a “stream-of-conscious” narrative, as exemplified in James Joyce’s Ulysses. The orientation of the constellations offer a greater degradation of the human civilisation. In other words boots to asses is one of the rock’s most famous catchphrases`,

		annotationSrc: './images/face-off-the-rock.jpg',

		annotationFigcaption:
			'The Rock in <a href="https://www.youtube.com/watch?v=E9T78bT26sk">"Face Off"</a> Music Video',

		annotationUpvoteNum: '+0',
	},
	{
		highlightText: 'Thank you, Teremana',

		annotationDetails: `Teremana means spirit of the earth, and the name of Dwayne “The Rock” Johnson’s tequila brand.`,

		annotationSrc: './images/rock-holding-teremana-drink.jpg',

		annotationFigcaption: '',

		annotationUpvoteNum: '+0',
	},
]);

const annotationData = JSON.parse(annotationJSON);

var annotation = document.querySelector('.annotation');
const annotationClose = document.querySelector('.fa-close');
const annotationDetails = document.querySelector('.annotation_details');
const annotationImg = document.querySelector('.annotation_img');
const annotationFigcaption = document.querySelector('.annotation_figcaption');
const annotationUpvoteNum = document.querySelector(
	'.annotation_upvote_container>span'
);

/*-----------------------*/
/* Featured News         */
/*-----------------------*/
const albumSongsJSON = JSON.stringify([
	{
		title: 'Talk Of The Town',
		song: './sound/jack-harlow-talk-of-the-town.mp3',
	},

	{
		title: 'Young Harleezy',
		song: './sound/jack-harlow-young-harleezy.mp3',
	},

	{
		title: "I'd Do Anything To Make You Smile",
		song: './sound/jack-harlow-id-do-anything-to-make-you-smile.mp3',
	},

	{
		title: 'First Class',
		song: './sound/jack-harlow-first-class.mp3',
	},

	{
		title: 'Dua Lipa',
		song: './sound/jack-harlow-dua-lipa.mp3',
	},

	{
		title: 'Side Piece',
		song: './sound/jack-harlow-side-piece.mp3',
	},

	{
		title: 'Movie Star (ft. Pharrell Williams)',
		song: './sound/jack-harlow-movie-star-feat-pharrell-williams.mp3',
	},

	{
		title: 'Lil Secret',
		song: './sound/jack-harlow-lil-secret.mp3',
	},
	{
		title: 'I Got A Shot',
		song: './sound/jack-harlow-i-got-a-shot.mp3',
	},

	{
		title: 'Churchill Downs (ft. Drake)',
		song: './sound/jack-harlow-churchill-downs-feat-drake.mp3',
	},

	{
		title: 'Like A Blade of Grass',
		song: './sound/jack-harlow-like-a-blade-of-grass.mp3',
	},

	{
		title: 'Parent Trap (ft. Justin Timberlake)',
		song: './sound/jack-harlow-parent-trap-feat-justin-timberlake.mp3',
	},

	{
		title: 'Poison (ft. Lil Wayne)',
		song: './sound/jack-harlow-poison-feat-lil-wayne.mp3',
	},

	{
		title: 'Nail Tech',
		song: './sound/jack-harlow-nail-tech.mp3',
	},

	{
		title: 'State Fair',
		song: './sound/jack-harlow-state-fair.mp3',
	},
]);

const albumSongsData = JSON.parse(albumSongsJSON);

const playPauseBtn = document.querySelector('.play_pause_btn');
// const pauseBtn = document.querySelector(".fa-pause");

var audio = document.querySelector('.audio');
var currentSong = document.querySelector('.current_song');
const audioPlaylistSong = document.querySelectorAll('.playlist_song');
const audioPlaylistTitle = document.querySelectorAll('.playlist_song_title');

const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress_container');

const levelBar = document.querySelectorAll('.level_bar');

const fullTime = document.querySelector('.full_time');

/*-----------------------*/
/* Featured News         */
/*-----------------------*/

const featuredNewsGrid = document.getElementById('featured-news-grid');
const featuredTitle = document.querySelectorAll('.featured_title');
const featuredDate = document.querySelectorAll('.featured_date');
const featuredImg = document.querySelectorAll('.featured_cell_img_container');
const featuredAuthor = document.querySelectorAll('.featured_author');
const featuredLink = document.querySelectorAll('.featured_link');

const loadMoreButton = document.getElementById('load-more-button');
const loadMoreButtonText = document.getElementById('load-more-button-text');
const loadingCircle = document.getElementById('loading-circle');

var clickCount = 0;

const featuredDataJson = JSON.stringify([
	{
		title:
			'Radio Personality Laura Stylez Talks Balancing Motherhood And Her Career',
		date: 'May 6, 2022',
		image: 'images/laura-stylez.jpg',
		gif: 'images/laura-stylez.gif',
		author: 'Leah Degrazia',
		href: 'https://genius.com/a/radio-personality-laura-stylez-talks-balancing-motherhood-and-her-career',
	},

	{
		title: 'A$AP Rocky Professes His Love For Rihanna In New Song “D.M.B.”',
		date: 'May 6, 2022',
		image: 'images/a-ghetto-love-tale-asap-rocky.jpg',
		gif: 'images/a-ghetto-love-tale-asap-rocky.gif',
		author: 'Ken Partidge',
		href: 'https://genius.com/a/a-ap-rocky-professes-his-love-for-rihanna-in-new-song-d-m-b',
	},

	{
		title: 'Read All The Lyrics To Bad Bunny’s New Album ‘Un Verano Sin Ti’',
		date: 'May 6, 2022',
		image: 'images/el-ultimo-tour-del-mundo-bad-baby.jpg ',
		gif: 'images/el-ultimo-tour-del-mundo-bad-baby.gif ',
		author: 'Leah Degrazia',
		href: 'https://genius.com/a/read-all-the-lyrics-to-bad-bunnys-new-album-un-verano-sin-ti',
	},

	{
		title: 'Read All The Lyrics To Arcade Fire’s New Album ‘WE’',
		date: 'May 6, 2022',
		image: 'images/we-arcade-fire.jpg',
		gif: 'images/we-arcade-fire.gif',
		author: 'Ken Partridge',
		href: 'https://genius.com/a/read-all-the-lyrics-to-arcade-fires-new-album-we',
	},

	{
		title:
			'Read All The Lyrics To Jack Harlow’s New Album ‘Come Home The Kids Miss You’',
		date: 'May 6, 2022',
		image: 'images/come-home-the-kids-miss-you-jack-harlow.jpg',
		gif: 'images/come-home-the-kids-miss-you-jack-harlow.gif',
		author: 'Leah Degrazia',
		href: 'https://genius.com/a/read-all-the-lyrics-to-jack-harlows-new-album-come-home-the-kids-miss-you',
	},

	{
		title:
			'Tove Lo Struggles To Survive Heartbreak On New Song “No One Dies From Love”',
		date: 'May 5th, 2022',
		image: 'images/no-one-dies-from-love-tove-lo.jpg',
		gif: 'images/no-one-dies-from-love-tove-lo.gif',
		author: 'Leah Degrazia',
		href: 'https://genius.com/a/tove-lo-struggles-to-survive-heartbreak-on-new-song-no-one-dies-from-love',
	},

	{
		title: 'Chase Atlantic Suffer Dark Times On New Song “COLD NIGHTS”',
		date: 'May 4th, 2022',
		image: 'images/beauty-in-death-chase-atlantic.jpg',
		gif: 'images/beauty-in-death-chase-atlantic.gif',
		author: 'Ken Partridge',
		href: 'https://genius.com/a/chase-atlantic-suffer-dark-times-on-new-song-cold-nights',
	},

	{
		title:
			'Lady Gaga Provides Comfort During Difficult Times On New Song “Hold My Hand”',
		date: 'May 3, 2022',
		image: 'images/hold-my-hand-lady-gaga.jpg',
		gif: 'images/hold-my-hand-lady-gaga.gif',
		author: 'Leah Degrazia',
		href: 'https://genius.com/a/lady-gaga-provides-comfort-during-difficult-times-on-new-song-hold-my-hand',
	},

	{
		title: 'Genius Community Playlist April 2022 ',
		date: 'April 30th, 2022',
		image: 'images/genius-community.gif',
		gif: 'images/genius-community.gif',
		author: 'streetlights',
		href: 'https://genius.com/a/genius-community-playlist-april-2022',
	},

	{
		title: 'Justin Bieber Links With Don Toliver On New Song “Honest”',
		date: 'April 29th, 2022',
		image: 'images/honest-justin-bieber-don-toliver.jpg',
		gif: 'images/honest-justin-bieber-don-toliver.gif',
		author: 'Leah Degrazia',
		href: 'https://genius.com/a/justin-bieber-links-with-don-toliver-on-new-song-honest',
	},
	{
		title: 'Read All The Lyrics To Future’s New Album ‘I NEVER LIKED YOU’',
		date: 'April 29th, 2022',
		image: 'images/i-never-liked-you-future.jpg',
		gif: 'images/i-never-liked-you-future.gif',
		author: 'Ken Partridge',
		href: 'https://genius.com/a/read-all-the-lyrics-to-futures-new-album-i-never-liked-you',
	},

	{
		title: 'Read All The Lyrics To Toro y Moi’s New Album ‘MAHAL’',
		date: 'April 29th, 2022',
		image: 'images/mahal-chaz-bear.jpg',
		gif: 'images/mahal-chaz-bear.gif',
		author: 'Ken Partridge',
		href: 'https://genius.com/a/read-all-the-lyrics-to-toro-y-mois-new-album-mahal',
	},
]);
const featuredData = JSON.parse(featuredDataJson);

/*---------------------*/
/* Verified Artists    */
/*---------------------*/

const chooseLetterContainer = document.querySelector(
	'.choose_letter_container'
);
const chooseLetter = document.querySelector('.choose_letter');
const mostPopularHeading = document.querySelector('.most_popular_heading');
const verifiedArtistsUl = document.querySelectorAll(
	'.verified_artists_overflow > ul'
);
const verifiedArtists = document.querySelectorAll('.verified_artist');

const verifiedArtistJSON = JSON.stringify([
	{
		artist: 'A Boogie Wit Da Hoodie',
		img: './images/a-boogie-wit-da-hoodie.jpeg',
	},
	{
		artist: 'Billie Eilish',
		img: './images/billie-eilish.jpg',
	},
	{
		artist: 'Cardi B',
		img: './images/cardi-b.jpg',
	},
	{
		artist: 'Andrea Bocelli',
		img: './images/andrea-bocelli.jpeg',
	},
	{
		artist: 'Bob Marley',
		img: './images/bob-marley.jpg',
	},
	{
		artist: 'Conor Maynard',
		img: './images/conor-maynard.jpeg',
	},
]);

const verifiedArtistData = JSON.parse(verifiedArtistJSON);
