//all reducers get 2 arguments: the current state, and action
//reducers are only called when an action occurs
//the state argument is not the application state, it is the state this reducer is responsible for
export default function(state = null, action) { //ES6 syntax. if state is undefined, set it to null
	switch(action.type) {
	case 'BOOK_SELECTED':
		return action.payload;
	}

	return state;
}