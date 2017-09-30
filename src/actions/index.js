export function selectBook(book) {
	//selectBook is an action creator, it returns an action here
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}