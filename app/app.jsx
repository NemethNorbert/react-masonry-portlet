import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Gallery from './Gallery.js';
import data from './data.json';
import shuffle from 'shuffle-array';

import './App.css';

//Pagination infitie scrolling implementation, Scrolling sidebar to the mainpage, Design for the img-author-title, Content design, Refactor code

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: [],
    }

    this.calculateMaxWeight = (articles) => {
      let maxWeight = 0;

      articles.map(article => {
        maxWeight = maxWeight + article.view
      });
      articles.weight = maxWeight;
    }

    this.calculateWeight = (articles) => {
      articles.map(article => {
        article.weight = article.view / articles.weight * 4000;
        article.articleContent = article.articleContent.slice(0, article.weight);
      });
    }
  }

  componentDidMount() {
    this.calculateMaxWeight(data);

    this.calculateWeight(data);

    shuffle(data);

    this.setState({
      articles: data
    });
  }
  render() {
    const { articles, } = this.state;
    return (
      <div className="rwp-App">
        <Gallery elements={articles}/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
