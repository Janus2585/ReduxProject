import React, { Component } from 'react';
//react-redux is the 'glue' between react and redux
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
//BookList is a container component
//containers are special components that receive the data from redux and pass the data to their children
class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
					key={book.title} 
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

//take application state as an argument(in this case, it is a list of books and the active book)
//whatever is returned from this function will be props inside BookList
function mapStateToProps(state) {
	return {
		books: state.books
	};
}

//anything returned from mapDispatchToProps will end up as props on the BookList container, similar to mapStateToProps.
function mapDispatchToProps(dispatch) {
	//whenever selectBook is called, the result should be passed to all of our reducers. this is what bindActionCreators() is doing 
	//dispatch is like a funnel that takes all the actions, and sends them to the reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//"connect" here takes the BookList component, takes the mapStateToProps and mapDispatchTopProps, and promotes BookList to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);