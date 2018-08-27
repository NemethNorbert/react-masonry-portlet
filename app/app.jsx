import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Gallery from './Gallery.js';
import data from './data.json';
import shuffle from 'shuffle-array';
import {ResizeListener} from "react-resize-listener";

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
      clearTimeout(resizeId);
      const resizeId = setTimeout(this.resizeRender, 100);
    }

    this.resizeRender = () => {
      this.setState({articles: this.state.articles});
    }

    let pAuth = Liferay.authToken;
    let url = "http://localhost:8080/api/jsonws/rec.recommendentity/get-top-most-viewed-ranomized/result-count/12/sample-count/300?p_auth=" + pAuth;
    fetch(url)
       .then(res => res.json())
       .then(articles => {
         this.setState({ articles: articles.topRecommendations});

         this.calculateMaxWeight();

         this.calculateWeight();
       });
  }

  render() {
    const { articles, } = this.state;
    return (
      <div className="rwp-App">
        <Gallery elements={articles}/>
        <ResizeListener onResize={this.onResize} />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
