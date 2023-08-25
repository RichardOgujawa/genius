function cursorMove(event) {
	//Check to see if the page has scrolled and add or minus that from the position, so that we get an accurate positiion
	window.addEventListener('scroll', () => {
		var windowY = window.scrollY;
		var windowX = window.scrollX;
	});

	//mouse position + windowScroll from above
	var x = event.clientX + window.scrollX;
	var y = event.clientY + window.scrollY;

	// update position of mouse
	cursorOuter.style.top = `${y}px`;
	cursorOuter.style.left = `${x}px`;

	cursorInner.style.top = `${y}px`;
	cursorInner.style.left = `${x}px`;
}

//When I  hover over specific elements let the cursor be made bigger
cursorBiggers.forEach((cursorBigger) => {
	cursorBigger.addEventListener('mouseenter', () => {
		cursorOuter.style.width = '70px';

		cursorInner.style.width = '70px';
	});

	cursorBigger.addEventListener('mouseleave', () => {
		cursorInner.style.width = '40px';

		cursorOuter.style.width = '40px';
	});
});
