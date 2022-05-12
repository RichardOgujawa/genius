//Create an element with the x position of the width of the span plus a couple of pixelse, and the height of the box will depend on the content. But it will have a 
//<figure><img class=\'annotation_img\' src="../images/peter-rocky-rock.jpg" alt="Peter Waiva, Rocky Johnson and Dwayne "The Rock" Johnson"><figcaption class="annotation_figcaption fs-200">Pictured left to right: Peter Maivia, Rocky Johnson, and Dwayne “The Rock” Johnson.</figcaption></figure>

const annotationJSON = JSON.stringify(
    [
        {
            "annotationDetails" : 
            'In this line, Dwayne explains his mixed ancestry. His father, former professional wrestler Rocky Johnson, was Black, while his mother Ata Johnson, is Samoan. His adopted maternal grandfather Peter Maivia was also a pro wrestler, making him an honorary member of the Anoa\' i Samoan wrestling family. Johnson’s original ring name was Rocky Maivia, an homage to both his father and grandfather\.',

            "annotationImg" : "../images/peter-rocky-rock.jpg",

            "annotationFigcaption" : 'Pictured left to right: Peter Maivia, Rocky Johnson, and Dwayne “The Rock” Johnson.',

            "annotationUpvoteNum" : "+68"
        }, 
        {
            "annotationDetails" : 
            'Dwayne "The Rock" Johnson\'s first verse is written as a “stream-of-conscious” narrative, as exemplified in             James Joyce’s Ulysses. The orientation of the constellations offer a greater degradation of the human civilisation. That\'s why it\'s imperative that any similitude between the human condition, and the retired recompensation of Socrates\' political animal.',

            "annotationImg" : "../images/face-off-the-rock.jpg",

            "annotationFigcaption" : 'The Rock in <a href="https://www.youtube.com/watch?v=E9T78bT26sk">"Face Off"</a> Music Video',

            "annotationUpvoteNum" : "+0"
        }, 
  
]
)

const annotationData = JSON.parse(annotationJSON);

var annotation = document.querySelector('.annotation');
const annotationClose = document.querySelector('.fa-close')
const annotationDetails = document.querySelector('.annotation_details');
const annotationImg = document.querySelector('.annotation_img');
const annotationFigcaption = document.querySelector('.annotation_figcaption');
const annotationUpvoteNum = document.querySelector('.annotation_upvote_container>span');

highlights.forEach((highlight, index) => {
    highlight.addEventListener('click', ()=> {
        annotation.style.visibility = "visible";
        // Get position of highlight
        console.log(`${highlight.offsetTop}px`);
        let highlightrect = highlight.getBoundingClientRect();
        
        annotation.style.top = `${highlight.offsetTop}px`;
        
        annotation.style.left = `${highlightrect.left - annotation.clientWidth*1.8}px` 
        annotationDetails.innerHTML = annotationData[index].annotationDetails;
        annotationUpvoteNum.textContent = annotationData[index].annotationUpvoteNum;

        
        if (annotationData[index].trim != ""){
            annotationImg.setAttribute('src', `${annotationData[index].annotationImg}`)
        
            annotationFigcaption.innerHTML =  annotationData[index].annotationFigcaption;
        }

    });
})


annotationClose.addEventListener('click', ()=> {
    annotation.style.visibility = "hidden";
})



// highlight.forEach(item => {
//     item.addEventListener('click', ()=> {
//     })
// })



