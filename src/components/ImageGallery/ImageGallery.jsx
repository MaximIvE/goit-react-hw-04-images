import { Component } from "react";
import { Gallery } from "./ImageGallery.styled";
import ImageGalleryItem from "components/ImageGalleryItem";
import PropTypes from 'prop-types';


export default class ImageGallery extends Component{

render(){
    const images = this.props.reply;

    return (
        <Gallery>
            {images
            .map(({id, webformatURL, largeImageURL, tags})=>{
                return <ImageGalleryItem 
                            key ={id} 
                            onModal={this.props.onModal} 
                            src={webformatURL} 
                            dataSource={largeImageURL} 
                            alt={tags}
                        />
                })
            }
        </Gallery>
    )
};
};

ImageGallery.propTypes = {
    reply: PropTypes.arrayOf(PropTypes.object).isRequired,
    onModal: PropTypes.func.isRequired,
};