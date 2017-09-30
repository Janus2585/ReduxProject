import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		//check if a book has been selected. When the app first starts, there is no selected book (this.props.book = null), so prompt user to select a book
		if (!this.props.book) {
			console.log(this.props);
			return <div>Select a book to get started.</div>;
		}

		return (
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.book.title}</div>
				<div>Pages: {this.props.book.pages}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);