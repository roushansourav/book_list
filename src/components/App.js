import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import './App.css';
export default class App extends Component {
  render() {
    return (
      <div>
      <div id="details" className="col-sm-8"><BookDetail /></div>
      <BookList />
      
      </div>
    );
  }
}


