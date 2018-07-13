import React from 'react';
import ReactDOM from 'react-dom';
import Masonry from 'react-masonry-component';

const elements =  [{src: "http://placehold.it/175x200"}, {src: "http://placehold.it/175x200"}, {src: "http://placehold.it/175x200"}];
const masonryOptions = {
  transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Gallery extends React.Component {
  render() {
      const childElements = elements.map(function(element){
         return (
              <li className="image-element-class">
                  <img src={element.src} />
              </li>
          );
      });
  
      return (
          <Masonry
              className={'my-gallery-class'} // default ''
              elementType={'ul'} // default 'div'
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

ReactDOM.render(<Gallery />, document.getElementById('app'));