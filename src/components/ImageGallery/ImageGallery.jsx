import { Component } from "react";
import { Gallery } from "./ImageGallery.styled";
import ImageGalleryItem from "components/ImageGalleryItem";

export default class ImageGallery extends Component{

    createGallery = () => {
        
    }
    
render(){
    const images=this.props.reply;
    if (images.length === 0){return}

    return (
        <Gallery>
            {images.map(({id, webformatURL, largeImageURL, tags})=>{return <ImageGalleryItem onModal={this.props.onModal} key ={id} src={webformatURL} dataSource={largeImageURL} alt={tags}/>})
            }

        </Gallery>
    )
};
}