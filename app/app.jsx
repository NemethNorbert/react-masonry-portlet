import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Gallery from './Gallery.js';
import data from './data.json';
import shuffle from 'shuffle-array';
import ResizeAware from 'react-resize-aware';

const axios = require('axios');

import './App.css';

//Pagination infitie scrolling implementation, Scrolling sidebar to the mainpage, Design for the img-author-title, Content design, Refactor code

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      resizing: false
    }
    this.maxWeight = 0;

    this.calculateMaxWeight = () => {
      let arr = this.state.articles.slice(0);
      arr.map(article => {
        this.maxWeight = this.maxWeight + article.viewCount
      });
    }

    this.calculateWeight = () => {
        let articles = this.state.articles.slice(0);
        articles.map(article => {
        article.weight = article.viewCount / this.maxWeight * 3000;
        article.contentSample = article.contentSample.slice(0, article.weight);
      });
      shuffle(articles);
      this.setState({articles: articles});
    }

    this.onResize = () => {
      clearTimeout(resizeRender);
      const resizeRender = setTimeout(this.resizeRender, 150);
    }

    this.resizeRender = () => {
      this.setState({articles: this.state.articles});
    }

    let pAuth = Liferay.authToken;
    let url = "/api/jsonws/rec.recommendentity/get-top-most-viewed-randomized/result-count/12/sample-count/200?p_auth=" + pAuth;
    axios.get(url)
       .then(data => {
         this.setState({ articles: data.data.topRecommendations});

         this.calculateMaxWeight();

         this.calculateWeight();
       });
  }

  render() {
    const { articles, } = this.state;
    return (
      <ResizeAware
          className="rwp-App"
          style={{ position: 'relative' }}
          onlyEvent
          onResize={this.onResize}
      >
        <Gallery elements={articles}/>
      </ResizeAware>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
