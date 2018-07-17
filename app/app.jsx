import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Gallery from './Gallery.js';
import data from './data.json';
import shuffle from 'shuffle-array';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

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
    debugger;
    calculateWeight(data);
    shuffle(data);
  }
  render() {
    return (
      <div className="App">
        <Gallery elements={data}/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
