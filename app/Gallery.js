import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

import './Gallery.css';

class Gallery extends Component {
  constructor(props){
    super(props);
    const masonryOptions = {
        transitionDuration: 2
    };
    const imagesLoadedOptions = { };
  }
    render() {
      const childElements = this.props.elements.map(function(element){
         return (
          <div key={element.articleId} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="rwp-article">
            <p className="rwp-title">{element.articleTitle}</p>
              <div className="rwp-profile">
                <img className="thumbnailPic" src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w" />
                <hr />
                <h3 className="rwp-name">{element.authorName}</h3>
                <hr />
              </div>
              <p className="rwp-description">{element.articleContent}...</p>
            </div>
          </div>
          );
      });
        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'div'} // default 'div'
                options={this.masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={this.imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}

export default Gallery;
