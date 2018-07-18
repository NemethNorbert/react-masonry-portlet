import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Gallery from './Gallery.js';
import data from './data.json';
import shuffle from 'shuffle-array';

import './App.css';

//Pagination infitie scrolling implementation, Scrolling sidebar to the mainpage, Design for the img-author-title, Content design, Refactor code
const calculateWeight = (articles) => {
  calculateMaxWeight(articles);
  articles.map(article => {
    article.weight = article.view / articles.weight * 4000;
    article.articleContent = article.articleContent.slice(0, article.weight);
  });
}
const calculateMaxWeight = (articles) => {
  let x = 0;
  articles.map(article => {
    x = x + article.view
  });
  articles.weight = x;
}
class App extends Component {
  componentWillMount() {
    calculateWeight(data);
    shuffle(data);
  }
  render() {
    return (
      <div className="rwp-App">
        <Gallery elements={data}/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
