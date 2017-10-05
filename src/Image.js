import React, { Component } from 'react';

const imgUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ccc40fa2d0e400ea13fae765dea404ba&format=json&nojsoncallback=1&photo_id=';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgSrc: ''
        }
      }

    render() {
        let tmpUrl = imgUrl + this.props.photoId;
        console.log('tmpUrl: '+tmpUrl);
        this.setState({imgSrc : ''});
        fetch(tmpUrl).then(pics => pics.json())
        .then(pic => {
            let src = pic.sizes.size[2].source;
            this.setState({imgSrc : src});
            console.log(src);
        }).bind(this);
    
        return (
             <div><img src={this.state.imgSrc} /></div>
        );
    }
}


  export default Image;