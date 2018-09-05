import {combineReducers} from 'redux';
import BooksReducers from './reducers-books';
import ActiveBook from './reducer_active_book';
const rootreducers=combineReducers({
    books:BooksReducers,
    activeBook:ActiveBook
    
});
//console.log(BooksReducers);
export default rootreducers;