import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//make sure all reducers are included in here or they will not trigger
const rootReducer = combineReducers({
  //any key to the object combineReducers (books, activeBook, etc.) is a key of the global state
  //for each key, one reducer is assigned
  //For example, whatever the BooksReducer reducer returns, that will be available as a piece of application state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
