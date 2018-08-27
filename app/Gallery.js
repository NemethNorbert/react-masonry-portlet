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
          <div key={element.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <a href={element.url} >
              <div className="rwp-article">
              <p className="rwp-title">{element.title}</p>
                <div className="rwp-profile">
                  <div className="thumbnailPic" style={{backgroundImage: "url(/image"+element.userPortraitUrl+")"}}></div>
                  <hr />
                  <h3 className="rwp-name">{element.userName}</h3>
                  <hr />
                </div>
                <p className="rwp-description">{element.contentSample}...</p>
                <p className="rwp-readcount glyphicon glyphicon-eye-open"> {element.viewCount}</p>
              </div>
            </a>
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
