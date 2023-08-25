const annotationsEditBtn = document.querySelector('.annotation_edit_btn');
const annotationEditTextArea = document.querySelector(
	'.annotation_edit_textarea'
);
const annotationEditReview = document.querySelector('.annotation_edit_review');

annotationsEditBtn.addEventListener('click', () => {
	if (annotationsEditBtn.textContent == 'Edit') {
		annotationEditTextArea.value = annotationDetails.innerHTML;
		annotationDetails.innerHTML = '';
		annotationEditTextArea.style.display = 'block';
		annotationEditReview.style.display = 'block';
		annotationsEditBtn.textContent = 'Save';
	} else {
		annotationDetails.innerHTML = annotationEditTextArea.value;
		annotationEditTextArea.style.display = 'none';
		annotationsEditBtn.textContent = 'Edit';
		annotationEditReview.style.display = 'none';
	}
});

//get window width and if it's tablet size then aset the annotation to appear on top of the lyrics analysis text in step of beside it:

let reduceBy;

function getWindowWidth() {
	let windowW = window.innerWidth;
	if (windowW > 768) reduceBy = 1.1;
	else reduceBy = 0;
}
//When the page first loads get the window width and set the reduce by variable
window.addEventListener('load', () => {
	getWindowWidth();
});

//any time the user resizes the page, get the new window width and set the reduce by variable
window.addEventListener('resize', () => {
	getWindowWidth();
});

highlights.forEach((highlight, index) => {
	highlight.addEventListener('click', () => {
		annotation.style.visibility = 'visible';

		var i;

		for (i = 0; annotationData.length; i++) {
			if (highlight.textContent === annotationData[i].highlightText) {
				// Getting position of Highlight
				let highlightrect = highlight.getBoundingClientRect();
				//Setting position of Annotation using Highlight
				annotation.style.top = `${highlight.offsetTop}px`;
				annotation.style.left = `${
					highlightrect.left - annotation.clientWidth * reduceBy
				}px`;

				//Annotation Subtle Slide Animation
				annotation.classList.add('annotation_animation');

				//Setting content of Highlight using JSON Data
				annotationDetails.innerHTML = annotationData[index].annotationDetails;
				annotationUpvoteNum.textContent =
					annotationData[index].annotationUpvoteNum;

				//Checking if there is an image and setting the image to that
				if (annotationData[index].trim != '') {
					annotationImg.setAttribute(
						'src',
						`${annotationData[index].annotationSrc}`
					);
					annotationFigcaption.innerHTML =
						annotationData[index].annotationFigcaption;
				}
			} else {
			}

			annotationEditTextArea.style.display = 'none';
			annotationsEditBtn.textContent = 'Edit';
			annotationEditReview.style.display = 'none';
			annotationsEditBtn.style.display = 'block';
		}
	});
});

//Closing Annotation function
annotationClose.addEventListener('click', () => {
	annotationsEditBtn.style.display = 'none';
	annotation.style.visibility = 'hidden';
	annotation.classList.remove('annotation_animation');
});

highlights.forEach((highlight) => {
	highlight.addEventListener('mouseenter', () => {
		cursorOuter.style.width = '74px';

		cursorPress.style.opacity = '1';
		cursorPress.style.display = 'inline';

		cursorInner.style.width = '72px';
		cursorInner.style.backgroundColor = 'hsl(var(--clr-dark, 0 0% 9%), 0.5)';
		cursorInner.style.mixBlendMode = 'normal';

		//This effect doesn't work on Firefox, it's not supported
		cursorInner.style.backdropFilter = 'blur(3px)';
	});

	highlight.addEventListener('mouseleave', () => {
		cursorPress.style.opacity = '0';
		cursorPress.style.display = 'none';

		cursorOuter.style.width = '40px';

		cursorInner.style.width = '40px';
		cursorInner.style.backgroundColor = 'hsl(var(--clr-accent, 60 100% 50%))';
		cursorInner.style.mixBlendMode = 'difference';
		cursorInner.style.backdropFilter = 'blur(0px)';
	});
});
