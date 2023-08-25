verifiedArtists.forEach((verifiedArtist) => {
	verifiedArtist.addEventListener('mouseenter', () => {
		for (i = 0; i < verifiedArtistData.length; i++) {
			if (
				verifiedArtist.querySelector('.fs-300').innerHTML ==
				verifiedArtistData[i].artist
			) {
				console.log('match');
				cursorInner.style.backgroundImage = `url(${verifiedArtistData[i].img})`;
				cursorInner.style.mixBlendMode = 'normal';
			}
		}
	});

	verifiedArtist.addEventListener('mouseleave', () => {
		cursorInner.style.backgroundImage = 'none';
		cursorInner.style.mixBlendMode = 'difference';
	});
});

const mouseDownHandler = function (e) {
	// Get the current mouse position
	x = e.clientX;

	// Attach the listeners to `document`
	document.addEventListener('mousemove', mouseMoveHandler);
	document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function (e) {
	// How far the mouse has been moved
	const dx = e.clientX - x;
	const offsetX = chooseLetter.offsetLeft;

	// Set the position of element
	chooseLetter.style.left = `${offsetX + dx}px`;
	chooseLetter.style.backgroundImage = `radial-gradient(circle at ${
		5 - offsetX * 0.4
	}%, hsl(var(--clr-accent, 60 100% 50%), 0.5), transparent 40%)`;

	// Reassign the position of mouse
	x = e.clientX;
	y = e.clientY;

	if (offsetX > -92) {
		for (i = 0; verifiedArtistsUl.length - 1; i++) {
			verifiedArtistsUl[i].style.transform = `translateY(0em)`;
			verifiedArtistsUl[i].style.transition = `transform var(--speed) ${
				0.5 + i * 0.1
			}s ease`;
			mostPopularHeading.textContent = `Most
            Popular A
            Artists
            on Genius`;
		}
	} else if (offsetX > -197) {
		for (i = 0; verifiedArtistsUl.length - 1; i++) {
			verifiedArtistsUl[i].style.transform = `translateY(-3.5em)`;
			mostPopularHeading.textContent = `Most
            Popular B
            Artists
            on Genius`;
		}
	} else if (offsetX > -300) {
		for (i = 0; verifiedArtistsUl.length - 1; i++) {
			verifiedArtistsUl[i].style.transform = `translateY(-7em)`;
			mostPopularHeading.textContent = `Most
            Popular C
            Artists
            on Genius`;
		}
	}
};

const mouseUpHandler = function () {
	// Remove the handlers of `mousemove` and `mouseup`
	document.removeEventListener('mousemove', mouseMoveHandler);
	document.removeEventListener('mouseup', mouseUpHandler);
};

chooseLetterContainer.addEventListener('mousedown', mouseDownHandler);

chooseLetterContainer.addEventListener('mouseenter', () => {
	cursorOuter.style.width = '74px';

	cursorDrag.style.opacity = '1';
	cursorDrag.style.display = 'inline';

	cursorInner.style.width = '72px';
	cursorInner.style.backgroundColor = 'hsl(var(--clr-dark, 0 0% 9%), 0.5)';
	cursorInner.style.mixBlendMode = 'normal';

	//This effect doesn't work on Firefox, it's not supported
	cursorInner.style.backdropFilter = 'blur(3px)';
});

chooseLetterContainer.addEventListener('mouseleave', () => {
	cursorDrag.style.opacity = '0';
	cursorDrag.style.display = 'none';

	cursorOuter.style.width = '40px';

	cursorInner.style.width = '40px';
	cursorInner.style.backgroundColor = 'hsl(var(--clr-accent, 60 100% 50%))';
	cursorInner.style.mixBlendMode = 'difference';
	cursorInner.style.backdropFilter = 'blur(0px)';
});
