export function Rating(numberOfFillStars, halfStar) {
	const icons = [];
	if (numberOfFillStars >= 1) {
		for (let x = 0; x < numberOfFillStars; x++) {
			icons.push(<i className='bi bi-star-fill me-1' />);
		}
		if (halfStar >= 3 && halfStar <= 7) {
			icons.push(<i className='bi bi-star-half me-1' />);
		} else if (halfStar > 7) {
			icons.push(<i className='bi bi-star-fill me-1' />);
		}
	}
	if (icons.length < 5) {
		const stars = 5 - icons.length;
		for (let x = 0; x < stars; x++) {
			icons.push(<i className='bi bi-star me-1' />);
		}
	}
	return icons;
}
