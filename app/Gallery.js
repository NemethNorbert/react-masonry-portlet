import React, { Component } from 'react';
import Masonry from 'react-masonry-component';


const masonryOptions = {
    transitionDuration: 1
};

const imagesLoadedOptions = { }

class Gallery extends Component {
    render() {
        const childElements = this.props.elements.map(function(element, index){
           return (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="rwp-article">
                <div className="rwp-profile">
                  <img src="https://images.unsplash.com/photo-1484186139897-d5fc6b908812?ixlib=rb-0.3.5&s=9358d797b2e1370884aa51b0ab94f706&auto=format&fit=crop&w=200&q=80%20500w" className="thumbnailPic" />
                </div>
                <h3 className="rwp-name">{element.authorName}</h3>
                <hr />
                <p className="rwp-title">{element.articleTitle}</p>
                <p className="rwp-description">{element.articleContent}...</p>
              </div>
            </div>
            );
        });

        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}

export default Gallery;
